import { HomePage } from './../home/home';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  FB_APP_ID: number = 1435579616521864;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public nativeStorage: NativeStorage,
    public fb: Facebook) {
    // this.fb.browserInit(this.FB_APP_ID);
  }
  
  doFbLogin() {
    let permissions: string[] = ['public_profile'];

    this.fb.login(permissions)
      .then(response => {
        let userId = response.authResponse.userID;
        let params: string[] = [];

        this.fb.api('/me?field=name', params)
          .then(user => {
            this.nativeStorage.setItem('user', {
              userId: userId,
              name: user.name,
            })
              .then(() => {
                this.navCtrl.push(HomePage);
              }, error => {
                console.log(error);
              })
          })
      }, error => {
        console.log(error);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
