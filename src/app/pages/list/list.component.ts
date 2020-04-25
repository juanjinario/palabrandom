import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  uploadForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      word: ['', Validators.required],
    });
  }
}
