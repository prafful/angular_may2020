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
  id:number=null
  name:string=""
  location:string=""
  likes:number=0
  displayAddNewFriendForm: boolean = false
  displayEditFriendForm:boolean = false

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

  toggleDisplayEditFriendFrom =(id)=>{
    this.displayEditFriendForm = true
    console.log("Edit friend with id: " + id)
    this.api.getFriendById(id)
            .subscribe(res =>{
              console.log(res)
              this.id = res.id
              this.name = res.name
              this.location = res.location
              this.likes = res.likes
            }, err=>{
              console.log(err)
            })
    //this.displayAddNewFriendForm = true
  }

  editSelectedFriend =(eff)=>{
    console.log(eff.value)
    this.api.updateFriendById(this.id, eff.value)
            .subscribe(res=>{
              console.log(res)
              this.getAllFriendsFromService()
            }, err=>{
              console.log(err)
            })
  }

  deleteSelectedFriend =(id)=>{
    this.api.deleteFriendById(id)
            .subscribe(res=>{
              console.log(res)
              this.getAllFriendsFromService()
            }, err=>{
              console.log(err)
            })
  }


}
