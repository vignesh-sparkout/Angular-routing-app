import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Dashboard } from './dashboard/dashboard';
import { Pipes } from './pipes/pipes';
import { EmployeeList } from './employee-list/employee-list';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'pipes', component: Pipes },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'employee-list', component: EmployeeList },
      
    ],
  },
  { path: 'employee-list', redirectTo: 'dashboard/employee-list', pathMatch: 'full' },
  { path: 'pipes', redirectTo: 'dashboard/pipes', pathMatch: 'full' },
];
