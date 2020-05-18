import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummythree',
  templateUrl: './dummythree.component.html',
  styleUrls: ['./dummythree.component.css']
})
export class DummythreeComponent implements OnInit {


  friends = ['obb','mlann', 'bnp', 'owioh', 'cas']


  constructor() { }

  ngOnInit(): void {
  }

}
