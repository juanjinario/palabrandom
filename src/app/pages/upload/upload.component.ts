import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  uploadForm: FormGroup;
  constructor(private fb: FormBuilder, private wordsService: WordsService) {}

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      word: ['', Validators.required],
    });
  }
  save() {
    const { word } = this.uploadForm.value;
    const wordArr = word.split(',');
    this.wordsService.addWords(wordArr);
  }
}
