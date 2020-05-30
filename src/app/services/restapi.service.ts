import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  
  constructor(private http:HttpClient) { }

  getRemoteData=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")

  }


  welcome=()=>{
    return "Welcome to REST API!!!!"
  }

 
}
