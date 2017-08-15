import { LoginPage } from './../login/login';
import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	user: any;
	userReady: boolean = false;

	constructor(public navCtrl: NavController, private fb: Facebook, private nativeStorage: NativeStorage) {

	}

	ionViewCanEnter() {
		this.nativeStorage.getItem('user')
			.then(data => {
				this.user = {
					userId: data.userId,
					name: data.name,
				};
				this.userReady = true;
			}, error => {
				console.log(error);
			})
	}

	doFbLogout() {
		this.fb.logout()
		.then(response => {
			this.nativeStorage.remove('user');
			this.navCtrl.push(LoginPage);
		}, error => {
			console.log(error);
		})
	}

	postRandomPic() {
		// this.fb.login(["public_profile"]);
	}

}
