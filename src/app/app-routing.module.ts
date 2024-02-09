import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LinechartComponent } from './linechart/linechart.component';

const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'index',component:IndexComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'applyLeave',component:ApplyLeaveComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'linechart',component:LinechartComponent},
  {path:'',redirectTo:'login', pathMatch:'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
