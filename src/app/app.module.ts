import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoCreateComponent } from './to-do-create/to-do-create.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DoneToDoListComponent } from './done-to-do-list/done-to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    ToDoCreateComponent,
    ToDoListComponent,
    DoneToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
