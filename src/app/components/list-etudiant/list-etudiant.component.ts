import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc,Firestore,collection,getDocs,doc,updateDoc } from '@angular/fire/firestore';
import { deleteDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

 etudiant: any[] = [];
  constructor(private etudiantService: EtudiantService  ) { 
  }

  ngOnInit(): void {
    this.getEtudiant();
  }
  getEtudiant()
  {
    this.etudiantService.getEtudiant().subscribe(data=>{
      this.etudiant= [];
      data.forEach((element:any)=>{
        console.log(element.payload.doc.data());
        this.etudiant.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
        console.log(this.etudiant);
    })
  }
  deleteEtudiant(id: string)
  {
    this.etudiantService.deleteEtudiant(id).then(()=>{
      console.log('suppression reussi');
    }).catch(error=>{
      console.log(error);
    })
  }
}
