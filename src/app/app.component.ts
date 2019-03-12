import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-app';

  myPromise:Promise<string>;
  asynchData: string;

  abc() : void
  {
    this.myPromise = new Promise<string>
    (
      (resolve, reject)=>
      {
        setTimeout(() => resolve("Sunsoft Technology !"),3000);
      }
    );

    this.myPromise.then(value => 
              this.asynchData = value)//console.log("THEN : "+value))
              .catch(error => console.log("CATCH : "+error))

  }


  xyz() : void
  {
    let myObservable = Observable.create((subscriber) => {
            subscriber.next("Hello");
            subscriber.next("How r u ?");
            subscriber.next("Hope Fine !");
            subscriber.complete();
    });

    myObservable.subscribe(
      (data) => console.log("Success : "+data),
      (error) => console.log("Error : "+error),
      () => console.log("Completed...."),
    )
  }


}
