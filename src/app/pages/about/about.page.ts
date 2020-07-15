import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {
  title: string =
    'OUR PRODUCTION PROCESS IS BASED ON 40 YEARS OF INDUSTRY EXPERIENCE';

  constructor() {}

  ngOnInit() {}

  openChat(chat) {
    chat.intercom.show();
  }
}
