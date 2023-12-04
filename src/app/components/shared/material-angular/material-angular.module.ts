import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//navbar de material
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import{MatFormFieldModule} from'@angular/material/form-field';
import{MatInputModule} from'@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDateRangePicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    
  ],
exports:[
  MatToolbarModule,
  MatSlideToggleModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule, 
  
]


})
export class MaterialAngularModule { }
