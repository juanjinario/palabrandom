import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Word } from '../models/word.model';
import { Observable, of, from } from 'rxjs';
import { map, retryWhen, concat, delay, take, filter, concatMap, repeat, scan, skipWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  constructor(private firestore: AngularFirestore) {}

  getWords(sampleSize) {
    return new Observable(observer => {
      this.firestore
        .collection('words')
        .valueChanges()
        .pipe(take(1))
        .subscribe(data => {
          // Shuffle array
          const shuffled = data.sort(() => 0.5 - Math.random());
          // Get sub-array of first n elements after shuffled
          let sampleList = shuffled.slice(0, sampleSize);
          observer.next(sampleList);
        });
    });
  }

  addWords(words: string[]) {
    words.map(word => {
      const newWord = new Word(word, '', '');
      this.firestore
        .collection('words')
        .add({ ...newWord })
        .then(value => {
          // console.log(value);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
}
