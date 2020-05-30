import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  users:any=null

  message:string = null

  constructor(private api:RestapiService) { }

  ngOnInit(): void {
    this.message = this.api.welcome()
    //this.api.getRemoteData().subscribe(this.successFunction, this.failureFunction)
    this.api.getRemoteData().subscribe(success=>{
      console.log(success);
      this.users = success
      console.log("Users: ");
      console.log(this.users);
    }, failure=>{
      console.log(failure);
    })

  }

/*   successFunction =(response)=>{
    console.log(response);
    this.users = response
    console.log("Users: ");
    console.log(this.users);

  }

  failureFunction=(error)=>{
    console.log(error);
  } */

}
