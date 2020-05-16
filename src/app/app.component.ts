import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class RootComponent {
  title = 'Prafful Daga';
  score = 80

  welcome(){
    return "Welcome to Angular!!!!"
  }




}
