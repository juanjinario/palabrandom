import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Word } from '../models/word.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor(private firestore: AngularFirestore) {}

  getWords() {
    return this.firestore.collection('words').valueChanges();
  }

  addWords(words: string[]) {
    words.map(async (word) => {
      const newWord = new Word(word.toLowerCase(), '', '');
      await this.firestore
        .collection('words')
        .add({ ...newWord })
        .then((value) => {})
        .catch((err) => {
          return false;
        });
    });
    return true;
  }
}
