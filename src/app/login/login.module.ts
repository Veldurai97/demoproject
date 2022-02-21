import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SingupComponent } from './singup/singup.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes=[
  {
    path:"",
    component: LoginComponent,
    data:{moduleName:'LoginModule'},
    children:[
      {
        path:"",
        redirectTo:"signin",
      },
      {
        path:"signin",
        component:SigninComponent,
      },
      {
        path:"singup",
        component:SingupComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [LoginComponent, SingupComponent, SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
