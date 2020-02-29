import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantViewComponent } from './applicant-view/applicant-view.component';
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';


const routes: Routes = [
  {path:'',component:ApplicantViewComponent,pathMatch:'full'},
  {path:'addApp',component:ApplicantFormComponent},
  {path:'editApp/:name',component:ApplicantFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
