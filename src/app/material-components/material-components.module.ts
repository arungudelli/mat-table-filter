import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  exports:[
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class MaterialComponentsModule { }
