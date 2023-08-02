import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DoctorComponent } from './doctor/doctor.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BlockComponent } from './block/block.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {
    path:'about', component:AboutComponent
  }
  ,  {
    path:'doctor', component:DoctorComponent
  },
  {
    path:'gallary', component:GallaryComponent
  }
  ,  {
    path:'block', component:BlockComponent
  }
  ,
  {
    path:'gallery', component:GallaryComponent
  }
  ,
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'registration', component:RegistrationComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'appointment', component:AppointmentComponent
  },
  {
    path:'privacy', component:PrivacyComponent
  },
  {
    path:'terms', component:TermsComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
