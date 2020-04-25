import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
<<<<<<< HEAD
// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { ListComponent } from './list.component';
import { FiltersComponent } from './components/filters/filters.component';
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> f7b0a01ed367102a11086db39fc8c545d6ad5d13

import { ListComponent } from './list.component';

@NgModule({
<<<<<<< HEAD
  declarations: [
    ListComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule
  ]
=======
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule, ReactiveFormsModule],
>>>>>>> f7b0a01ed367102a11086db39fc8c545d6ad5d13
})
export class ListModule {}
