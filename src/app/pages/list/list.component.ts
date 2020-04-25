import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  $allWords: Observable<any[]>;
  numberOptions: {}[];
  number: {};
  wordList;

  constructor(private wordsService: WordsService) {
    this.numberOptions = [
      { id: 1, title: '1 palabra' },
      { id: 5, title: '5 palabra' },
      { id: 20, title: '20 palabra' },
      { id: 50, title: '50 palabra' },
      { id: 100, title: '100 palabra' },
      { id: 200, title: '200 palabra' },
    ];
    this.number = this.numberOptions[0];
  }

  ngOnInit(): void {
    this.$allWords = this.wordsService.getWords();
  }
}
