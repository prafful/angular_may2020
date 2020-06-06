import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-texteffect',
  templateUrl: './texteffect.component.html',
  styleUrls: ['./texteffect.component.css'],
  animations:[
    trigger('textanimate', [
                            state("one", style({
                                                color:'red',
                                                backgroundColor:'lightgreen'  ,
                                                borderWidth:'4px',
                                                borderStyle:'dotted',
                                                borderColor:'red',
                                                transform:'scale(1)'  ,
                                                letterSpacing:'5px'                          
                            })), 
                            state("two", style({
                                                color:'green',
                                                backgroundColor:'pink',
                                                borderWidth:'4px',
                                                borderStyle:'dashed',
                                                borderColor:'green',
                                                transform:'scale(3)' ,
                                                letterSpacing:'-2px'
                            })), 
                            transition('one <-> two', animate('500ms ease-out'))])
  ]
})
export class TexteffectComponent implements OnInit {

  currentState:string = 'two'

  constructor() { }

  ngOnInit(): void {
  }

  animateMe =()=>{
    this.currentState = this.currentState === 'one'? 'two':'one'
  }

}

/**
 * animation name -> name of the animation
 * trigger -> allows you to trigger the animation on certain 
 *            event : trigger(animationname, [state definitions...state(), state()])
 * state -> when you are animating, you are transforming any 
 *          specifc element from one state to another. 
 *           Each such state is defined by state(name, style())
 * 
 * style -> Collection of Basic CSS rules to define specific state
 * 
 * transition -> Takes care of the transtion when animation is moving from one state to another
 * 
 * animate -> function which will take care of the transition!
 * 
 */