import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-consumeone',
  templateUrl: './consumeone.component.html',
  styleUrls: ['./consumeone.component.css']
})
export class ConsumeoneComponent implements OnInit {

  myscores:number[]=null  
  score:number = null
  constructor(private math:MathService) { }

  ngOnInit(): void {

    console.log(this.math.welcome())
    //console.log(this.math.scores)
    this.myscores = this.math.getScore()
    //this.math.scores.push(3)
    console.log(this.math.getScore())
    console.log("From ConsumeOne: " +  this.math.scores)

  }

  addScoreToService =()=>{
    if(this.score!=null){
      this.math.scores.push(this.score)
    }
  }

}
