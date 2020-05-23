import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoall',
  templateUrl: './todoall.component.html',
  styleUrls: ['./todoall.component.css']
})
export class TodoallComponent implements OnInit {

  todoitem: string= ""

  todos: string[]=["plan the weekend", "get the groceries", "tracking bigbasket!!!!"] 

  constructor() { }

  ngOnInit(): void {
  }

  addTodo =()=>{
    this.todos.push(this.todoitem)
    this.todoitem = ""
  }

}
