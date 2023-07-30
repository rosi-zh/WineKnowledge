import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  constructor(private http: HttpClient) { }

  getAllWines() {
    return this.http.get('/api/wines.json');
  }

  getWine() {
    return this.http.get('/api/wines.json');
  }

  addWine(title: string, category: string, text: string) {
    return this.http.post('/api/wines.json', { title, category, text });
  }
}
