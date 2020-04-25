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
  uploadForm: FormGroup;
  constructor(private fb: FormBuilder, private wordsService: WordsService) {}

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      word: ['', Validators.required],
    });
  }

  save() {
    const { word } = this.uploadForm.value;
    const wordArr: Word[] = word.split();
    this.wordsService.addWords(wordArr);
  }
}
