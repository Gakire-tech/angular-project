import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListEtudiantComponent } from './components/list-etudiant/list-etudiant.component';
import { CreateEtudiantComponent } from './components/create-etudiant/create-etudiant.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes=[
  
  { path:'',redirectTo:'login', pathMatch:'full' },
  {path:'listEtudiant', pathMatch:'full', component: ListEtudiantComponent },
  { path:'createEtudiant', pathMatch:'full',component: CreateEtudiantComponent },
  { path:'editEtudiant/:id', pathMatch:'full',component: CreateEtudiantComponent },
  { path:'login', pathMatch:'full',component: LoginComponent },
  { path:'signup', pathMatch:'full',component: SignUpComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
