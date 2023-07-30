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
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();

    
    this.authService.register(firstName, lastName, email, password)
      .subscribe((d) => {
      console.log(d);
      this.router.navigate(['/']);
    });
    
  }
}
