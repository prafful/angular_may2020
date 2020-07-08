import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoggerService } from 'src/app/logging-service/logger.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  reactivePersonal:any
  fname: string =""
  lname:string=""
  choice:string=""


  constructor(private logger:LoggerService) { }

  ngOnInit(): void {
    this.reactivePersonal = new FormGroup({
      fname: new FormControl("OBB", Validators.compose([
                                                          Validators.required,
                                                          Validators.minLength(4),
                                                          Validators.pattern('^[a-zA-Z]+$')
      ])),
      lname: new FormControl("", this.customValidation),
      choice: new FormControl()
    })

  }

  customValidation =(control)=>{
    console.log(control);
    if(control.value.length < 3){
      return {lname: true}
    }
    
  }

  saveFormValue =(rf)=>{
    console.log(rf);
    this.logger.debug("Inside saveFormValue method")
     this.logger.warn("Inside saveFormValue method")
     this.logger.info("Inside saveFormValue method")
      this.logger.error("Inside saveFormValue method")
    //this.logger.debug("Logging rf: "  + rf)
    //this.logger.debug(rf)
    //this.logger.debug("Logging rf: "  + JSON.stringify(rf))
    console.log(rf.value);

  }

}
