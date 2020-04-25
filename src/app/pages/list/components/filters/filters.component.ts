import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() numberChange = new EventEmitter<any>();
  @Input() number;
  @Input() numberOptions;

  constructor() {
   }

  ngOnInit(): void {
  }

  /** Sección de la palabra */
  toogleOrigin(numberSelected) {
    this.number = numberSelected;
    // Debe llamarse igual
    this.numberChange.emit(this.number);
  }

  setNumberFilter() {
    this.onClick.emit(this.number);
  }

}
