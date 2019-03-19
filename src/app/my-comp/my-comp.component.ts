import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Response } from '@angular/http/src/static_response'
import { User } from './user';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  n : number = 1;
  user : User = {"id":0, "name":"", "age" : 0};
  users : User[] = [];
    errorMsg : string = "";
    errorMsg1 : string = "";
    errorMsg2 : string = "";


  constructor(private rS : RestService) { }

  ngOnInit() {
    //this.autoIncr();
  }


  // autoIncr()
  // {
  //   setInterval(() => {
  //     this.getItem(this.n);
  //     console.log(this.n);
  //     this.n++;
  //     if(this.n==8)
  //     {
  //       this.n = 1;
  //     }
  //   }, 1000);
  // }
  



  getItem(i)
  {
    this.rS.getUser(i).subscribe(
        
        (response:Response)=> (this.user = response.json()),
        (error) => 
        {
            console.log("Record with id "+i+" does not exists!!!");
            this.errorMsg = "Record with id "+i+" does not exists!!!";
        }
      )
  }


  postItem(id, name, age)
  {
    let user1 = new User(id, name, age);
    this.rS.postUser(user1)
    .subscribe
    (
      (response : any)=>console.log("Put Succesfully"),
      (error) => 
        {
            console.log("Record with id "+id+" already exists!!!");
            this.errorMsg1 = "Record with id "+id+" already exists!!!";
        }
    )
  }

  deleteItem(id)
  {
      this.rS.deleteUser(id)
      .subscribe
      (
          (response : any) => console.log("Deleted Successfully..."),
          (error) => 
            {
                console.log("Record with id "+id+" does not exists!!!");
                this.errorMsg2 = "Record with id "+id+" does not exists!!!";
            }
      )
  }

  getAllItems()
  {
      this.rS.getAllUsers()
      .subscribe
      (
          (response : any)=> this.users = response
      )
  }




}