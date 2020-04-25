import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { UploadComponent } from './upload.component';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    SharedModule
  ]
})
export class UploadModule { }
