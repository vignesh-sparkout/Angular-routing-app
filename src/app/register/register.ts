import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html'
})
export class Register {

  constructor(private router: Router) {}

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required),
  });

  submit() {
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    localStorage.setItem('user', JSON.stringify(this.registerForm.value));
    this.router.navigate(['/login']);
  }
}
