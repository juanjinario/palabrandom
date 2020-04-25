import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule, ReactiveFormsModule],
})
export class ListModule {}
