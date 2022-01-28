import { AuthGuardChild } from './../guards/auth-guard-child.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './singin/login/login.component';
import { StudentPanelComponent } from './student-panel/student-panel.component';

import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { BooklistComponent } from './booklist/booklist.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'home',
    component: PanelComponent,
    canActivate: [AuthGuard]
  },
      {path: 'bookList', component: BooklistComponent},
      {path: 'addBook', component: FormComponent},
      {path: 'edit/:id', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
