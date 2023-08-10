import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IWine } from 'src/app/types/wine';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit{
  wine!: IWine;
  isLoading: boolean = true;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private authService: AuthService) {}

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    this.getWine();
  }

  getWine():void {
    const wineId = this.activatedRoute.snapshot.params['wineId'];

    this.apiService.getSingleWine(wineId).subscribe({
      next: (data) => {
        this.wine = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      }
    });
  }

}
