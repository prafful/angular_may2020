import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpressMongoDBService {

  constructor(private http:HttpClient) { }

  getAllFriendsEM(){
    return this.http.get("http://localhost:1234/all")
  }


}
