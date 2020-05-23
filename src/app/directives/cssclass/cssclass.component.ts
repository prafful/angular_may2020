import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssclass',
  templateUrl: './cssclass.component.html',
  styleUrls: ['./cssclass.component.css']
})
export class CssclassComponent implements OnInit {

  status: boolean= true

  constructor() { }

  ngOnInit(): void {
  }

}
