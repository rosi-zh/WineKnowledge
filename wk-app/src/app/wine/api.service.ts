import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  get owner(): string | undefined {
    return this.authService.userId;
  }

  getAllWines() {
    return this.http.get('/api/wines.json');
  }

  getWine() {
    return this.http.get('/api/wines.json');
  }

  addWine(wineName: string, category: string, imageUrl: string, taste: string, wineDetails: string) {
    const ownerId = this.owner;

    return this.http.post('/api/wines.json', { wineName, category, imageUrl, taste, wineDetails, likes: [], ownerId });
  }
}
