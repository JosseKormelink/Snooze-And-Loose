import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private facebookConnectPlugin: Facebook) {

  }

  postRandomPic() {
    this.facebookConnectPlugin
  }

}
