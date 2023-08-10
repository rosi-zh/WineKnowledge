import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IWine } from '../types/wine';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  get owner(): string | undefined {
    return this.authService.userId;
  }

  getAllWines() {
    return this.http.get<{ [id: string]: IWine}>('/api/wines.json')
    .pipe(map((wines) => {
      let winesData: IWine[] = [];

      for (let id in wines) {
        winesData.push({...wines[id], id});
      }

      return winesData;
    }));
  }

  getSingleWine(wineId: string) {
    return this.http.get<IWine>(`/api/wines/${wineId}.json`);
  }

  addWine(wineName: string, category: string, imageUrl: string, taste: string, wineDetails: string) {
    const ownerId = this.owner;

    return this.http.post('/api/wines.json', { wineName, category, imageUrl, taste, wineDetails, likes: [], ownerId });
  }
}
