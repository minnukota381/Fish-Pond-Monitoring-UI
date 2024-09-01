import { Component, OnInit } from '@angular/core';

interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.user.password !== this.user.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    console.log('Form submitted', this.user);
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
}
