import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/types/wine';
import { WineService } from '../wine.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-wine-all',
  templateUrl: './wine-all.component.html',
  styleUrls: ['./wine-all.component.css']
})
export class WineAllComponent implements OnInit {
  wines: Wine[] = [];
  isLoading: boolean = true;

  constructor(private wineService: WineService, private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    this.wineService.getAllWines().subscribe({
      next: (winesObj) => {
        const winesList = Object.entries(winesObj).map(e => Object.assign({_id: e[0]}, e[1]));
        this.wines = winesList;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      }
    });
  }

}
