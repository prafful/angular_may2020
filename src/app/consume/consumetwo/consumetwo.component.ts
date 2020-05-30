import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-consumetwo',
  templateUrl: './consumetwo.component.html',
  styleUrls: ['./consumetwo.component.css']
})
export class ConsumetwoComponent implements OnInit {

  scoresmy:number[] = null

  constructor(private ms:MathService) { }

  ngOnInit(): void {
    this.ms.scores.push(4)
    this.scoresmy = this.ms.getScore()
    console.log("From ConsumeTwo: " + this.scoresmy);
  }

}
