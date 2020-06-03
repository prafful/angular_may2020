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

  getFriendById=(id)=>{
    //http://localhost:3000/all/someid
    return this.http.get(RestapiService.FRIEND_API+"/"+ id)
  }

  updateFriendById=(id, friend)=>{
    return this.http.put(RestapiService.FRIEND_API+"/"+id, friend)
  }

  addFriend=(friend)=>{
    return this.http.post(RestapiService.FRIEND_API, friend)
  }

  deleteFriendById=(id)=>{
    return this.http.delete(RestapiService.FRIEND_API+"/"+id)
  }




  welcome=()=>{
    return "Welcome to REST API!!!!"
  }

 
}
