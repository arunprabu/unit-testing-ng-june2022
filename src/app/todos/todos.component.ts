import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
  ]
})
export class TodosComponent implements OnInit {

  todoList: any[] = [];
  isSaved = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // req todos from rest api thru service
    this.todoService.getTodos()
      .subscribe( (res) => {
        console.log(res);
        this.todoList = res;
      });
  }
}
