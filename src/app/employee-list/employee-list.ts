import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {

}
