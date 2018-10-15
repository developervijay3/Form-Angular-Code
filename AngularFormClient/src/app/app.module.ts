import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsComponent } from './forms/forms.component';
import { FormPoster } from './services/formPoste.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'user', component: UserComponent},
      {path: 'home', component: FormsComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
  ])
  ],
  providers: [ FormPoster],
  bootstrap: [AppComponent]
})
export class AppModule { }
