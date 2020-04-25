import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { ListComponent } from './list.component';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [
    ListComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule
  ]
})
export class ListModule {}
