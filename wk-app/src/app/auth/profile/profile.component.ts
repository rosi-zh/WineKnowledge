import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IProfile } from 'src/app/types/profile';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditNameComponent } from '../edit-name/edit-name.component';

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

  constructor(private authService: AuthService, private router: Router, private modelService: NgbModal) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe(
      {
        next: (profileData) =>  {
          this.profileDetails = profileData
        },
        error: () => {
          localStorage.removeItem('userData');
          this.router.navigate(['/auth/login']);
        }
      }  
    );
  }

  openModal(): void {
    const modalRef = this.modelService.open(EditNameComponent);
  }
}
