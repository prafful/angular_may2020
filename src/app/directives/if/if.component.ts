import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  display: boolean = false

  displayelse: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay = ()=>{

    this.display = this.display == true ? false : true
    console.log("New value: " + this.display);
  }

  toggleDisplayElse =()=>{
    this.displayelse = this.displayelse == true ? false : true
    console.log("New value: " + this.displayelse);
  }

}
