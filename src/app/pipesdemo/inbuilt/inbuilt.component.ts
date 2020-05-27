import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {

  message: string = "abkra Ka DabRA GILI GILI bum"

  mydate: Date = new Date()

  salary: number = 8888

  constructor() { }

  ngOnInit(): void {
  }

}
