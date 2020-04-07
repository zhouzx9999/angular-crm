import { NgModule } from '@angular/core';
import { MatInputModule, } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";
import { MatSort } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
    imports: [
        MatSliderModule,
        MatToolbarModule,
        MatGridListModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatCardModule,
        MatPaginatorModule,
        MatTabsModule,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
    ],
    declarations: [],
    entryComponents: [],

    exports: [
        MatSliderModule,
        MatToolbarModule,
        MatGridListModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatCardModule,
        MatPaginatorModule,
        MatTabsModule,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatDialogModule,
        MatIconModule,

    ],
})

export class MyMaterialModule { }