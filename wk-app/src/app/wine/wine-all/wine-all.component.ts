import { Component, OnInit } from '@angular/core';
import { IWine } from 'src/app/types/wine';
import { ApiService } from '../api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-wine-all',
  templateUrl: './wine-all.component.html',
  styleUrls: ['./wine-all.component.css']
})
export class WineAllComponent implements OnInit {
  wines: IWine[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService, private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    this.apiService.getAllWines().subscribe({
      next: (data) => {
        this.wines = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      }
    });
  }

}
