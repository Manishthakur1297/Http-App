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
        
        (response:Response)=> (this.user = response.json())
      )
    }
  }
