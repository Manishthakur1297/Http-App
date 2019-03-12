import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response'
import { interval, Observable } from 'rxjs';
import 'rxjs/rx';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  url : string = "http://localhost:3000/users/";
  constructor(private http : Http) {}

  getUser(id) : Observable<any>
    {
      return this.http.get(this.url+id)
      .map((response : any)=>response);
    }

    // getUser(id) : void
    // {
    //   this.http.get(this.url+id).subscribe(
        
    //     (response:Response)=> console.log(response.json())
    //   )
    // }
  
}
