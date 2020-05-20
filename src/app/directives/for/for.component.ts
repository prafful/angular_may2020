import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  salary= [5000,8000,7000,9000]

  friends = [
    {
      id:"AB01",
      name:"OBB",
      score:8
    },
    {
      id:"AB02",
      name:"BNP",
      score:17
    },
    {
      id:"AB03",
      name:"MLANN",
      score:26
    },
    {
      id:"AB04",
      name:"OWIOH",
      score:4
    }
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

  /* changeScore = function(){
     this.salary
  }

  changeScore1(){

  } */

  changeScore =(counter)=>{
    console.log("Friend at index : " + counter + " is"  + this.friends[counter]);
    console.log("Friend at index : " + counter + " is"  +   JSON.stringify(this.friends[counter]));
    console.log(this.friends[counter]);
    ++this.friends[counter].score
    console.log(this.friends[counter]);
  }

}
