import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { SouthIndianComponent } from './south-indian/south-indian.component';
import { WesterDelightComponent } from './wester-delight/wester-delight.component';
import { DrinksComponent } from './drinks/drinks.component';
import { RouterModule } from '@angular/router';

const myRoute=[
  {
    path:"",
    component:UserLoginComponent
  },
  {
    path:"userreg",
    component:UserRegistrationComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"south",
    component:SouthIndianComponent
  },
  {
    path:"western",
    component:WesterDelightComponent
  },
  {
    path:"drinks",
    component:DrinksComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    HomeComponent,
    SouthIndianComponent,
    WesterDelightComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
