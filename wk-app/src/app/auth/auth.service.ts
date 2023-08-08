import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, map, tap } from 'rxjs';
import { IUserResponse } from '../types/userResponse';
import { environment } from 'src/environments/environment';
import { IProfile } from '../types/profile';

const { endpoints } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<IUserResponse | undefined>(undefined);
  user$ = this.user$$.asObservable();

  user: IUserResponse | undefined;
  

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
      .post<IUserResponse>(`/auth/${endpoints.login}`, { email, password })
      .pipe(tap((user) => {
        this.user$$.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
      }));
  }

  register(email: string, password: string, displayName: string) {
    return this.http
      .post<IUserResponse>(`/auth/${endpoints.register}`, { email, password, displayName })
      .pipe(tap((user) => {
        this.user$$.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
      }));
  }

  logout(): void {
    localStorage.removeItem('userData');
    this.user$$.next(undefined);
  }

  getProfile() {
    const idToken = this.user?.idToken;

    return this.http
      .post<{kind: string, users: IProfile[]}>(`/auth/${endpoints.profile}`, { idToken })
      .pipe(map((data) => {
        const profileData = data.users[0];
        
        return profileData;
      }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
