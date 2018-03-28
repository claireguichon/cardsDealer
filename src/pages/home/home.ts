import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  connexion:FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, private http : HttpClient) {
    this.connexion = this.formBuilder.group({
      pseudo: ['', Validators.compose([Validators.minLength(3), Validators.required])],
    });
  }
  logForm(){
      const url = "http://localhost:1341/cardsdealer/linq/";

    var data = {
      pseudo : this.connexion.value,
      ready : false
    };

    const req = this.http.post(url, data)
      .subscribe(
        res => {
          console.log("res"+res);
        },
        err => {
          console.log("err"+err);
        }
      );

    console.log("req"+req);

    const req2 = this.http.get(url)
      .subscribe(
        res => {
          console.log("res"+res);
        },
        err => {
          console.log("err"+err);
        }
      );

    console.log("req2"+req2);
  }
}
