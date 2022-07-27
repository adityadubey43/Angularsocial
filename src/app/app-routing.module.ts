import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path:'',component:LandingpageComponent},
  {path:'services',component:ServicesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
