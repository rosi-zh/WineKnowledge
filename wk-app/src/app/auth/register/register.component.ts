import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('registerForm') form!: NgForm;  

  constructor(private authService: AuthService) {}

  onRegister() {
    let { email, password } = this.form.value;
    email = email.trim();
    
    this.authService.register(email, password).subscribe((d) => {
      console.log(d);
    });
    
  }
}
