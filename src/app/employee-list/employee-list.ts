import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

type Employee = {
  id: string;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  email: string;
  role: string;
  status: '' | 'Active' | 'Inactive';
  phone?: string;
  joiningDate: string;
};

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  showAddModal = false;
  formSubmitted = false;

  roleOptions = ['Admin', 'Project Manager', 'Developer', 'Designer', 'Team Leader', 'HR'];
  statusOptions: Array<'Active' | 'Inactive'> = ['Active', 'Inactive'];

  employees: Employee[] = [
    {
      id: '001',
      name: 'Vignesh',
      gender: 'Male',
      email: 'vignesh@gmail.com',
      role: 'Developer',
      status: 'Active',
      joiningDate: '2024-01-10',
    },
    {
      id: '002',
      name: 'Tamil',
      gender: 'Male',
      email: 'tamil@gmail.com',
      role: 'Team Leader',
      status: 'Active',
      joiningDate: '2023-12-01',
    },
    {
      id: '003',
      name: 'Aravindh',
      gender: 'Male',
      email: 'aravindh@gmail.com',
      role: 'Developer',
      status: 'Active',
      joiningDate: '2022-06-15',
    },
     {
      id: '004',
      name: 'Samantha',
      gender: 'Female',
      email: 'samantha@gmail.com',
      role: 'HR',
      status: 'Active',
      joiningDate: '2022-06-15',
    },
  ];

  newEmployee: Employee = this.getEmptyEmployee();

  getEmptyEmployee(): Employee {
    return {
      id: '',
      name: '',
      gender: 'Male',
      email: '',
      role: '',
      status: '',
      phone: '',
      joiningDate: '',
    };
  }

  onAddEmployee() {
    this.showAddModal = true;
    this.formSubmitted = false;
    this.newEmployee = this.getEmptyEmployee();
  }

  onCancelAdd() {
    this.showAddModal = false;
    this.formSubmitted = false;
  }

  onSaveEmployee(form: NgForm) {
    this.formSubmitted = true;
    if (form.invalid) return;

    const employeeToAdd: Employee = {
      ...this.newEmployee,
      id: this.newEmployee.id.trim(),
      name: this.newEmployee.name.trim(),
      email: this.newEmployee.email.trim(),
      phone: this.newEmployee.phone?.trim(),
    };

    this.employees = [...this.employees, employeeToAdd];
    this.showAddModal = false;
    this.formSubmitted = false;
    this.newEmployee = this.getEmptyEmployee();
  }

  onEdit(emp: Employee) {
    console.log('Edit Employee:', emp);
  }

  onDelete(id: string) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }
}
