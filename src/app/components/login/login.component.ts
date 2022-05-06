import { Component, OnInit } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: Auth, private router: Router) { }

  ngOnInit(): void {
  }
  login(value: any)
  {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
    .then((Response: any)=>{
      console.log(Response.user);
      this.router.navigate(['/listEtudiant'])
    }).catch((err)=>{
      alert(err.message);
    })
  }
 
}
