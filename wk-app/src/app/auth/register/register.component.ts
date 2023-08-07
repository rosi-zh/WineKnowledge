import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('registerForm') form!: NgForm;  

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    let { firstName, lastName, email, password } = this.form.value;
    const displayName = `${firstName.trim()} ${lastName.trim()}`;
    email = email.trim();

    
    this.authService.register(email, password, displayName)
      .subscribe((d) => {
      this.router.navigate(['/']);
    });
    
  }
}
