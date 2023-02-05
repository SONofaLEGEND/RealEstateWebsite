import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NeighborhoodsComponent } from './components/neighborhoods/neighborhoods.component';
import { PredictComponent } from './components/predict/predict.component';
import { HousesComponent } from './components/houses/houses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    LoadingComponent,
    NeighborhoodsComponent,
    PredictComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,       
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [

    AuthService, 
    
],
  bootstrap: [AppComponent]
})
export class AppModule { }
