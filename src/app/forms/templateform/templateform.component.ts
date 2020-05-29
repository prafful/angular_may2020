import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  fname: string =""
  lname:string=""
  choice:string=""

  constructor() { }

  ngOnInit(): void {
  }

  saveFormValue =(pf)=>{
    console.log("Form Submitted!!!!");
    console.log(pf);
    console.log(pf.value);
  }

}
