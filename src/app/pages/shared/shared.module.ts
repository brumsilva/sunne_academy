import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BookCardComponent } from './book-card/book-card.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { ConfirmationBoxComponent } from './confirmation-box/confirmation-box.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RoutingModule } from '../routing.module';



@NgModule({
  declarations: [NavComponent, BookCardComponent, FormInputsComponent],
  exports: [
    NavComponent,
    BookCardComponent,
    FormInputsComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    RoutingModule
  ]
})
export class SharedModule { }
