import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor( private firestore: AngularFirestore ) { }


  create_NewDish(record: Dish) {
    return this.firestore.collection<Dish>('Dishes2').add(record);
  }

  create_Dishes() {
    return this.firestore.collection('Dishes2').snapshotChanges();
  }

  update_Dish(recordID,record){
    this.firestore.doc('Dishes2/' + recordID).update(record);
  }

  delete_Dish(record_id) {
    this.firestore.doc('Dishes2/' + record_id).delete();
  }
}
