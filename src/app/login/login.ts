import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  formData = {
    email: '',
    password: ''
  };

  errorMessage = '';

  constructor(private router: Router) {}
  goToRegister() {
    this.router.navigate(['/register']);
  }

  submit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
     

    const storedUserRaw = localStorage.getItem('user');

    if (!storedUserRaw) {
      this.errorMessage = 'No registered user found. Please register first.';
      localStorage.setItem('loggedIn', 'false');
      return;
    }

    const storedUser = JSON.parse(storedUserRaw);
    const isValidUser =
      storedUser?.email === this.formData.email &&
      storedUser?.password === this.formData.password;

    if (isValidUser) {
      this.errorMessage = '';
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/dashboard']);
      return;
    }

    this.errorMessage = 'Invalid email or password.';
    localStorage.setItem('loggedIn', 'false');
  }
}
