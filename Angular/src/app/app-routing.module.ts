import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HousesComponent } from './components/houses/houses.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { NeighborhoodsComponent } from './components/neighborhoods/neighborhoods.component';
import { PredictComponent } from './components/predict/predict.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', pathMatch: 'full',
    component: IndexComponent
  },
  {
    path: 'predict',
    component: PredictComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'neighborhoods',
    component: NeighborhoodsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'houses',
    component: HousesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
