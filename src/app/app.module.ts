import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/auth/sidebar/login/login.component';
import { SidebarComponent } from './Component/auth/sidebar/sidebar.component';
import { SignupComponent } from './Component/auth/sidebar/signup/signup.component';
import { BookingComponent } from './Component/booking/booking.component';
import { FooterComponent } from './Component/footer/footer.component';
import { GridcarComponent } from './Component/gridcar/gridcar.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { AddCarComponent } from './Component/Merchant/add-car/add-car.component';
import { MarchantCurdComponent } from './Component/Merchant/marchant-curd/marchant-curd.component';
import { NewTripsComponent } from './Component/new-trips/new-trips.component';
import { StracureComponent } from './Component/stracure/stracure.component';
import { PrivateComponent } from './Component/private/private.component';
import { BillingCurdComponent } from './Component/private/billing-curd/billing-curd.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StracureComponent,
    HomeComponent,
    BookingComponent,
    GridcarComponent,
    AddCarComponent,
    MarchantCurdComponent,
    NewTripsComponent,
    SidebarComponent,
    SignupComponent,
    LoginComponent,
    PrivateComponent,
    BillingCurdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    // EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
