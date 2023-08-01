import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { UserResponse } from '../types/userResponse';
import { environment } from 'src/environments/environment';

const { endpoints } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserResponse | undefined>(undefined);
  user$ = this.user$$.asObservable();

  user: UserResponse | undefined;

  private subscription: Subscription;

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
      .post<UserResponse>(`/auth/${endpoints.login}`, { email, password })
      .pipe(tap((user) => {
        this.user$$.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
      }));
  }

  register(email: string, password: string, displayName: string) {
    return this.http
      .post<UserResponse>(`/auth/${endpoints.register}`, { email, password, displayName })
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
