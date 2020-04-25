import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Word } from '../models/word.model';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor(private firestore: AngularFirestore) {}

  getWords(words: Word[]) {}

  addWords(words: Word[]) {
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
