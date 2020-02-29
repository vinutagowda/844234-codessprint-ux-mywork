import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';
import { ApplicantViewComponent } from './applicant-view/applicant-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantFormComponent,
    ApplicantViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
