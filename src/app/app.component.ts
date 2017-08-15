import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, public splashScreen: SplashScreen, private nativeStorage: NativeStorage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.nativeStorage.getItem('user')
        .then(data => {
          this.rootPage = HomePage;
          this.splashScreen.hide();
        }, error => {
          this.rootPage = LoginPage;
          this.splashScreen.hide();
        })

      statusBar.styleDefault();
    });
  }
}

