import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private db: AngularFireDatabase) { }

  insert(diploma:any){
    this.db.list('diploma').push(diploma)
    .then((result:any) =>{
        console.log(result.key)
    })

  }

  getAll(){
    return this.db.list('diploma').snapshotChanges().pipe((map(changes =>{
      return changes.map(c=>({
        key:c.payload.key,
        ...c.payload.val()
      }))
    })))
  }

  getcertificadoID(key){
    return this.db.object(`contato/${key}`).snapshotChanges();
  }

}
