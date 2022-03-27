import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  providers:[MessageService]
})
export class ToDoListComponent implements OnInit {
@Input() listData:any;
toDoList:any =[];
doneToDOTask:any = [];
  constructor(private messageService: MessageService) { }
  ngOnInit(): void {}
  addToDone(item:any,index:any){
      this.doneToDOTask.push(item);
      if (index > -1) {
        this.listData.splice(index, 1);
        this.messageService.add({severity:'success', summary:'Success', detail:'Tast Added in Done List'});
      }
  }
  unDoneTaskFunction(data:any){
    this.listData.push(data);
  }
}
