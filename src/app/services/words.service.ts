import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor(private firestore: AngularFirestore) {}

  getWords(words: string[]) {}

  addWords(words: string[]) {
    this.firestore
      .collection('words')
      .add({ ...words })
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
