import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WordsService } from 'src/app/services/words.service';
import { Word } from 'src/app/models/word.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  numberOptions: {}[];
  number: {};
  wordList;

  constructor(private wordsService: WordsService) {
    this.numberOptions = [
      {id: 1, title: '1 palabra', value: 1},
      {id: 5, title: '5 palabra', value: 5},
      {id: 20, title: '20 palabra', value: 20},
      {id: 50, title: '50 palabra', value: 50},
      {id: 100, title: '100 palabra', value: 100},
      {id: 200, title: '200 palabra', value: 200},
    ];
    this.number = this.numberOptions[0];
   }

   ngOnInit(): void {
  }

  getWords() {
    console.log(this.number);
  }
}
