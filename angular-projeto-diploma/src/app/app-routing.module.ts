import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaculdadeComponent } from './faculdade/faculdade.component';
import { DiplomaComponent } from './diploma/diploma.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard],children:[
    {path:'diplomas', component:DiplomaComponent},
    {path:'faculdades', component:FaculdadeComponent},
    {path:'', redirectTo:'dashboard/diplomas',pathMatch:'full'},
  ]},
  {path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }