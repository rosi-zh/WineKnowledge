import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private firebURL = 'https://wine-knowledge-default-rtdb.europe-west1.firebasedatabase.app/wines.json';

  constructor(private http: HttpClient) { }

  getAllWines() {
    return this.http.get(this.firebURL);
  }

  getWine() {
    return this.http.get(this.firebURL);
  }

  addWine(title: string, category: string, text: string) {
    return this.http.post(this.firebURL, { title, category, text });
  }
}
