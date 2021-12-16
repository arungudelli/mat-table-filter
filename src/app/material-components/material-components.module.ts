import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    CommonModule
  ],
  exports:[
    MatTableModule
  ]
})
export class MaterialComponentsModule { }
