import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from '../consume/models/friend';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  
  static readonly FRIEND_API  = "http://localhost:3000/all"

  constructor(private http:HttpClient) { }

  getRemoteData=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getAllFriends=()=>{
    return this.http.get(RestapiService.FRIEND_API)
  }

  getFriendById=()=>{}

  updateFriendById=()=>{}

  addFriend=(friend)=>{
    return this.http.post(RestapiService.FRIEND_API, friend)
  }

  deleteFriendById=()=>{}




  welcome=()=>{
    return "Welcome to REST API!!!!"
  }

 
}
