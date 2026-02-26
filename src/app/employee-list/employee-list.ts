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
  isEditMode = false;
  editingIndex: number | null = null;

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
    this.isEditMode = false;
    this.editingIndex = null;
    this.newEmployee = this.getEmptyEmployee();
  }

  onEdit(emp: Employee, index: number) {
    this.showAddModal = true;
    this.formSubmitted = false;
    this.isEditMode = true;
    this.editingIndex = index;
    this.newEmployee = { ...emp };
  }

  onCancelAdd() {
    this.showAddModal = false;
    this.formSubmitted = false;
    this.isEditMode = false;
    this.editingIndex = null;
  }

  onSaveEmployee(form: NgForm) {
    this.formSubmitted = true;
    if (form.invalid) return;

    const employeeData: Employee = {
      ...this.newEmployee,
      id: this.newEmployee.id.trim(),
      name: this.newEmployee.name.trim(),
      email: this.newEmployee.email.trim(),
      phone: this.newEmployee.phone?.trim(),
    };

    if (this.isEditMode && this.editingIndex !== null) {
      this.employees[this.editingIndex] = employeeData;
      this.employees = [...this.employees];
    } else {
      this.employees = [...this.employees, employeeData];
    }

    this.showAddModal = false;
    this.formSubmitted = false;
    this.isEditMode = false;
    this.editingIndex = null;
    this.newEmployee = this.getEmptyEmployee();
  }

  onDelete(id: string) {
    this.employeeToDelete = this.employees.find(emp => emp.id === id) || null;
    this.showDeleteModal = true; 
  }
  showDeleteModal = false;
  employeeToDelete: Employee | null = null;

  confirmDelete() {
    if (!this.employeeToDelete) return;
    this.employees = this.employees.filter(emp => emp.id !== this.employeeToDelete!.id);
    this.showDeleteModal = false;
    this.employeeToDelete = null;
  }
  
  cancelDelete() {
    this.showDeleteModal = false;
    this.employeeToDelete = null;
  }
}
