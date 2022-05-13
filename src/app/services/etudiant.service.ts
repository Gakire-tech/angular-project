import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private firestore: AngularFirestore) { }
  saveEtudiant(etudiant: any): Promise<any>
  {
     return this.firestore.collection('etudiant').add(etudiant);
  }
  getEtudiant(): Observable<any>
  {
    return this.firestore.collection('etudiant',ref=> ref.orderBy('dateCreation','asc')).snapshotChanges();
  }
  deleteEtudiant(id: string): Promise<any>
  {
    return this.firestore.collection('etudiant').doc(id).delete();
  }
  getEtudiants(id: string): Observable<any>
  {
    return this.firestore.collection('etudiant').doc(id).snapshotChanges();
  }
  actualisation(id: string, data:any): Promise<any>
  {
    return this.firestore.collection('etudiant').doc(id).update(data);
  }

}
