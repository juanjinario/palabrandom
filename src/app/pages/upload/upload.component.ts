import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WordsService } from 'src/app/services/words.service';
import Swal from 'sweetalert2';
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
      word: [''],
    });
  }
  save() {
    const { word } = this.uploadForm.value;
    const wordArr = word.split(',');
    const done = this.wordsService.addWords(wordArr);
    if (done) {
      this.uploadForm.reset();
      Swal.fire('Palabras registradas', 'Todo Bien', 'success');
    } else {
      Swal.fire('Ocurrio un error', 'Vuelva a intentarlo', 'warning');
    }
  }
}
