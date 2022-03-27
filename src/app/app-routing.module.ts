import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoCreateComponent } from './to-do-create/to-do-create.component';

const routes: Routes = [
  { path: '', component: ToDoCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
