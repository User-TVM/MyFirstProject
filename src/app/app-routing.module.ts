import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [{path:'', component:CreateProfileComponent},
{path:'view', component:ViewProfileComponent},
{path:'**', component:CreateProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
