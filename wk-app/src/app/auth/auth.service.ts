import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBY1iBKGiii6U-HtI909OzmGZwQ7mR37Do', { email, password})
  }

  register(email: string, password: string) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBY1iBKGiii6U-HtI909OzmGZwQ7mR37Do', {email, password});
  }
}
