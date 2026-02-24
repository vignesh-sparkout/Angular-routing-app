import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  userName = 'User';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedUserRaw = localStorage.getItem('user');

    if (!storedUserRaw) {
      this.userName = 'User';
      return;
    }

    const storedUser = JSON.parse(storedUserRaw);
    this.userName = storedUser?.name || 'User';
  }

  logout(): void {
    localStorage.setItem('loggedIn', 'false');
    this.router.navigate(['/login']);
  }
}
