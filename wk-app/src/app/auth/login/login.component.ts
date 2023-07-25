import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm') form!: NgForm;

  constructor(private authService: AuthService) {}

  onLogin() {
    let { email, password } = this.form.value;
    email = email.trim();
    
    this.authService.login(email, password).subscribe((d) => {
      console.log(d);
    });
    
  }
}
