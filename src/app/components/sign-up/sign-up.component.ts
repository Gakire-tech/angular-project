import { Component, OnInit } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public auth: Auth) { }

  ngOnInit(): void {
  }
  submit(value: any)
  {
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
    .then((Response: any)=>{
      console.log(Response.user)
    }).catch((err)=>{
      alert(err.message);
    })
  }

}
