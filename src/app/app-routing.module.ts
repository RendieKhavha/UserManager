import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [

  {path: 'login', component:LoginComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'student-dashboard', component:StudentDashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
