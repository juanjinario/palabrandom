import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() number;
  @Input() numberOptions;

  constructor() {
   }

  ngOnInit(): void {
  }

  /** Activa - desactiva un orígen seleccionado en función del código. */
  toogleOrigin(numberSelected) {
    this.number = numberSelected;
  }

  setNumber() {
    this.onClick.emit({});
  }

}
