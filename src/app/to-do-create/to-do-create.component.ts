import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.css'],
  providers:[MessageService]
})
export class ToDoCreateComponent implements OnInit {
  form: any;
  formValue: any = [];
  constructor(private messageService: MessageService) { }
  ngOnInit() {
    this.form = new FormGroup({
      "taskName": new FormControl("", Validators.required),
      "taskDescription": new FormControl("", Validators.required),
      "taskRepeating": new FormControl("", Validators.required),
    });
    this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.addToDo()
      }
    })
  }

  addToDo() {
    this.formValue.push(this.form.value);
    this.messageService.add({severity:'success', summary:'Success', detail:'Tast Create Successful'});
    this.form.reset();
  }
}
