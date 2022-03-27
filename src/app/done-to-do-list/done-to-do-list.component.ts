import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-done-to-do-list',
  templateUrl: './done-to-do-list.component.html',
  styleUrls: ['./done-to-do-list.component.css'],
  providers:[MessageService]
})
export class DoneToDoListComponent implements OnInit {
  @Input() doneToDo:any;
  @Output() unDoneTaskFunction:EventEmitter<any>=new EventEmitter()
  unDoneList: any =[];
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }
  addToUnDone(item:any,index:any){
      this.unDoneTaskFunction.emit(item);
       if(index > -1) {
         this.doneToDo.splice(index, 1);
         this.messageService.add({severity:'success', summary:'Success', detail:'Tast Remove From UnDone'});
       }
   }

}
