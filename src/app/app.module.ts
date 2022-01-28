import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';
//Created Modules
import { PagesModule } from './pages/pages.module';
import { AuthGuard } from './guards/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LivroService } from 'src/services/livro.service';
import { NgChartsModule } from 'ng2-charts';


//Created Components

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    NgChartsModule,
  ],
  providers: [AuthGuard, LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
