import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { UpperCasePipe } from './upper-case.pipe';
import { GithDirective } from './gith.directive';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserFormComponent,
    UpperCasePipe,
    GithDirective,
    GithDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }