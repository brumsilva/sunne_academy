import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//module Route
import { RoutingModule } from './routing.module';

//pages
import { PanelComponent } from './panel/panel.component';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { SinginModule } from './singin/singin.module';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { BooklistComponent } from './booklist/booklist.component';
import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgChartsModule } from 'ng2-charts';
import { AuthGuard } from '../guards/auth-guard.service';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    PanelComponent,
    StudentPanelComponent,
    DashboardComponent,
    BooklistComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SinginModule,
    SharedModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    LayoutModule,
    MatDialogModule,
    MatToolbarModule,
    NgChartsModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard],
})
export class PagesModule { }
