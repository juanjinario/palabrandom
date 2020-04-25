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

  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    this.$allWords = this.wordsService.getWords();
  }
}
