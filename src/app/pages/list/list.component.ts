import { Component } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  words$: any;
  numberOptions: any[];
  number: any;
  wordList;

  constructor(private wordsService: WordsService) {
    this.numberOptions = [
      {id: 1, title: '1 palabra', value: 1},
      {id: 5, title: '5 palabras', value: 5},
      {id: 20, title: '20 palabras', value: 20},
      {id: 50, title: '50 palabras', value: 50},
      {id: 100, title: '100 palabras', value: 100},
      {id: 200, title: '200 palabras', value: 200},
    ];
    this.number = this.numberOptions[0];
  }

  getWords() {
    this.words$ = this.wordsService.getWords(this.number.value);
  }
}
