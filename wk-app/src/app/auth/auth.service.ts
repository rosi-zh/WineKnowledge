import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  user$ = this.user$$.asObservable();

  user: User | undefined;

  subscription: Subscription;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });

    try {
      const userData = localStorage.getItem('userData');
      if (userData) {
        const data = JSON.parse(userData);
        this.user$$.next(data);
      }
    } catch (error) {
      this.user$$.next(undefined);
    }
  }

  login(email: string, password: string) {
    return this.http
      .post<User>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBY1iBKGiii6U-HtI909OzmGZwQ7mR37Do', { email, password })
      .pipe(tap((user) => {
        this.user$$.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
      }));
  }

  register(firstName: string, lastName: string, email: string, password: string) {
    return this.http
      .post<User>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBY1iBKGiii6U-HtI909OzmGZwQ7mR37Do', { firstName, lastName, email, password })
      .pipe(tap((user) => {
        this.user$$.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
      }));
  }

  logout() {
    localStorage.removeItem('userData');
    this.user$$.next(undefined);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
