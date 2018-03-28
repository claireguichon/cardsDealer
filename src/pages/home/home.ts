///<reference path="../../../node_modules/ionic-angular/navigation/nav-controller.d.ts"/>
import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LoadingController, NavController} from 'ionic-angular';
import {SalonPage} from "../salon/salon";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  connexion:FormGroup;
  public pseudo: string;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, private http : HttpClient, public loadingCtrl: LoadingController ) {
    this.connexion = this.formBuilder.group({
      pseudo: ['', Validators.compose([Validators.minLength(3), Validators.required])],
    });
  }
  logForm(){
    const url = "http://localhost:1341/cardsdealer/linq/";
    const config = {headers:  {
        'Access-Control-Allow-Headers' : 'Content-Type',
        'Content-Type' : 'application/json',
        'Connection' : 'close'
      }
    };

    var data = JSON.stringify({
      pseudo : this.pseudo,
      ready : false
    });


    this.http.post(url, data, config).toPromise().then();



    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);

    


    this.navCtrl.push(SalonPage).then();



  }
}
