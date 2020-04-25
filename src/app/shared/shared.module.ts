import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Directives

// Modules
import { MaterialModule } from './modules/material/material.module';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    NavbarComponent,
  ],
})
export class SharedModule { }
