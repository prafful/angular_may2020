import { Component, OnInit } from '@angular/core';
import { ExpressMongoDBService } from 'src/app/services/express-mongo-db.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  friends:any = null

  constructor(private emapi:ExpressMongoDBService) { }

  ngOnInit(): void {
    this.getAllFriendsFromMongo()
  }

  getAllFriendsFromMongo(){
    this.emapi.getAllFriendsEM()
              .subscribe(res=>{
                console.log(res)
                this.friends = res
              }, err=>{
                console.log(err)
              })
  }

}
