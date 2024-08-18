import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  predefinedUsername: string = 'admin';
  predefinedPassword: string = 'password123';

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.username === this.predefinedUsername && this.password === this.predefinedPassword) {
      this.router.navigate(['/pond-management']);
    } else {
      alert('Invalid username or password!');
    }
  }
}
