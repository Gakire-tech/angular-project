import { Component, OnInit } from '@angular/core';
import { addDoc,Firestore,collection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent implements OnInit {
 
  createEtudiant: FormGroup;
  submit=false;
  loading=false;
  id: string | null;
  text='creation etudiant';

  constructor(private fb: FormBuilder, private etudiantService: EtudiantService, private router: Router,private aRouter: ActivatedRoute) {
    this.createEtudiant= this.fb.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      email:['',Validators.required],
      adresse:['',Validators.required]
    })
    this.id=this.aRouter.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  ngOnInit(): void {
    this.editEtudiant();
  }
  createEtudiants()
  {
    this.submit=true;
    if(this.createEtudiant.invalid)
    {
      return;
    }
    if(this.id === null)
    {
       this.saveEtudiant();
      }else{
        this.edit(this.id);
      }
    
  }
  saveEtudiant()
  {
    const etudiant: any={
      nom: this.createEtudiant.value.nom,
      prenom: this.createEtudiant.value.prenom,
      email: this.createEtudiant.value.email,
      adresse: this.createEtudiant.value.adresse,
      dateCreation: new Date(),
      datefin: new Date()
    }
    this.loading=true;
    this.etudiantService.saveEtudiant(etudiant).then(()=>{
      console.log('enregistrement reussi');
      this.loading=false;
      this.router.navigate(['/listEtudiant']);
    }).catch(error=>{
      console.log(error);
      this.loading=false;
    })
  }

  edit(id: string)
  {
    this.loading=true;
    const etudiant: any={
      nom: this.createEtudiant.value.nom,
      prenom: this.createEtudiant.value.prenom,
      email: this.createEtudiant.value.email,
      adresse: this.createEtudiant.value.adresse,
      dateCreation: new Date(),
      datefin: new Date()
    }
    this.etudiantService.actualisation(id, etudiant).then(()=>{
      this.loading= false;
    })
    this.router.navigate(['/listEtudiant']);
  }

  editEtudiant()
  {
    this.text='modification etudiant'
    if(this.id !== null)
    {
      this.etudiantService.getEtudiants(this.id).subscribe(data=>{
        console.log(data.payload.data()['nom']);
        this.createEtudiant.setValue({
          nom: data.payload.data()['nom'],
          prenom: data.payload.data()['prenom'],
          email: data.payload.data()['email'],
          adresse: data.payload.data()['adresse'],
        })
      })
    }
  }

}
