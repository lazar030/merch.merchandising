import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform, MenuController, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'arena',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private router: Router,
    private menu: MenuController,
    private statusBar: StatusBar,
    public popoverController: PopoverController
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.pages = [
      {
        title: 'Arena Embroidery',
        icon: 'Embroidery',
        url: 'https://arenaembroidery.com/'
      },
      {
        title: 'Arena Prints',
        icon: 'PrintingOrder',
        url: 'https://arenaprints.com/'
      },
      {
        title: 'Screen Burning ',
        icon: 'SB',
        url: 'https://shop.arenaprints.com/'
      },
      {
        title: 'Arena Sewing',
        icon: 'Sewing',
        url: 'https://arenasewing.com/'
      }
    ];
  }

  open(url: string) {
    window.open(`${url}`, '_blank');
  }

  navigate(path: string, menuId?) {
    this.menu.close();
    this.router.navigate([`/${path}`]);
  }
}
