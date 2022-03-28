import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',loadChildren:()=>import('./login/login.module').then(logn=>logn.LoginModule)},
  {path:'instrument',loadChildren:()=>import('./instrument/instrument.module').then(ins=>ins.InstrumentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
