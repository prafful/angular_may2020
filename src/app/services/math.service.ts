import { Injectable } from '@angular/core';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  scores:number[]=[1,2]

  constructor() { }

  welcome=()=>{
    return "Welcome to Angular Service!!!!"
  }

  getScore=()=>{
    return this.scores
  }

}
