import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
  
@Component({
  selector: 'app-pipes',
  imports: [CommonModule, RouterModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
  standalone: true
  
})
export class Pipes {
  title = 'Angular Projects';
  today = new Date()
  items = ['Apple', 'Orange', 'Mango', 'Banana'];
}
