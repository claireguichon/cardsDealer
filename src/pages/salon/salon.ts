import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'page-salon',
  templateUrl: 'salon.html',
})
export class SalonPage {

  users:any;

  constructor(public navCtrl: NavController, private http : HttpClient) {
    const url = "http://localhost:1341/cardsdealer/linq/";
    const config = {headers:  {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    var users = [{
      pseudo:"Joalien",
      ready:"false"
    }, {
      pseudo:"Clairounette",
      ready:"true"
    }];

    const req2 = this.http.get(url, config).
    subscribe((res: Response) => {
      this.users=res;
    });

    console.log(users);


  }

}
