import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IProfile } from 'src/app/types/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileDetails: IProfile | undefined = {
    localId: '',
    email: '',
    displayName: '',
    lastLoginAt: ''
  };
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe((profileData) => {
      console.log(Date());
      this.profileDetails = profileData;
    });
  }
}