import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssstyle',
  templateUrl: './cssstyle.component.html',
  styleUrls: ['./cssstyle.component.css']
})
export class CssstyleComponent implements OnInit {

  redcode: number=0

  constructor() { }

  ngOnInit(): void {
  }

  getColor =() =>{
    return "blue"
  }

  getBorder =() =>{
    return "green"
  }

}
