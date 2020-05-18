import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummyone',
  templateUrl: './dummyone.component.html',
  styleUrls: ['./dummyone.component.css']
})

export class DummyoneComponent implements OnInit {

  title = 'Prafful Daga';
  score = 80

  constructor() { }

  ngOnInit(): void {
  }

  welcome(){
    return "Welcome to Angular!!!!"
  }


}
