import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { Friend } from '../models/friend';

@Component({
  selector: 'app-consumefakerest',
  templateUrl: './consumefakerest.component.html',
  styleUrls: ['./consumefakerest.component.css']
})
export class ConsumefakerestComponent implements OnInit {

  title: string= "CRUD with json-server!!!!"
  friends:any=null
  name:string=""
  location:string=""
  likes:number=0
  displayAddNewFriendForm: boolean = false

  constructor(private api:RestapiService) { }

  ngOnInit(): void {
    this.getAllFriendsFromService()
  }

  getAllFriendsFromService =()=>{
    this.api.getAllFriends().subscribe(success=>{
      console.log(success);
      this.friends = success
    }, error=>{
      console.log(error);
    })
  }

  captureNewFriend =(newFriendFormInstance)=>{
    console.log(newFriendFormInstance);
    console.log(newFriendFormInstance.value);
    this.api.addFriend(newFriendFormInstance.value)
            .subscribe(res=>{
              console.log(res);
              this.getAllFriendsFromService()
              this.displayAddNewFriendForm = false
              this.name=""
              this.location=""
              
            }, err=>{
              console.log(err);
            })
  }

  toggleDisplayAddNewFriendFrom=()=>{
    this.displayAddNewFriendForm = !this.displayAddNewFriendForm
    
  }

}
