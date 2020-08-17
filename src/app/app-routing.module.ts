import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/auth/sidebar/login/login.component';
import { SidebarComponent } from './Component/auth/sidebar/sidebar.component';
import { SignupComponent } from './Component/auth/sidebar/signup/signup.component';
import { BookingComponent } from './Component/booking/booking.component';
import { GridcarComponent } from './Component/gridcar/gridcar.component';
import { HomeComponent } from './Component/home/home.component';
import { StracureComponent } from './Component/stracure/stracure.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'list', component: GridcarComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'stracture', component: StracureComponent },
    ],
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  // { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
