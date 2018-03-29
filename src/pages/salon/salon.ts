import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'page-salon',
  templateUrl: 'salon.html',
})
export class SalonPage {

  users:any;
  url = "http://localhost:1341/cardsdealer/linq/";
  config = {headers:  {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  constructor(public navCtrl: NavController, private http : HttpClient) {
  }

  ionViewDidLoad() {
    this.http.get(this.url, this.config).
    subscribe((res: Response) => {
      this.users=res;
    });
  }

  deleteUser(id){
    console.log("destruction de l'user: "+id);
    this.http.delete(this.url+"/"+id, this.config).
    subscribe((res: Response) => {
      this.users=res;
    });

    this.http.get(this.url, this.config).
    subscribe((res: Response) => {
      this.users=res;
    });
  }



}
