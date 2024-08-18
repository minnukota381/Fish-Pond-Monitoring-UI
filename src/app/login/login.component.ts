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

  onLogin(event: Event): void {
    event.preventDefault(); // Prevent form from submitting normally
    this.addRippleEffect(event);

    if (this.username === this.predefinedUsername && this.password === this.predefinedPassword) {
      setTimeout(() => {
        this.router.navigate(['/pond-management']);
      }, 600);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }

  addRippleEffect(event: Event): void {
    const button = event.target as HTMLElement;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${(event as MouseEvent).clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${(event as MouseEvent).clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }
}
