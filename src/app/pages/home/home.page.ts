import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public title: string = "WE'RE experts IN APPAREL PRINTING & CONTRACT SEWING";

  public sites: any[] = [
    {
      title: 'Arena Screen Burning',
      description:
        'Affordable, Versatile, Durable Arena Prints excels at serving the screen printing needs for many of the best local Phoenix, Arizona brands- as well as national and international collectives. With unlimited options for water based, specialty, and traditional inks (plus the most advanced printing equipment), we can screen print almost anything you need... just ask us for a quote!',
      icon: 'SB',
      url: 'https://shop.arenaprints.com/',
      color: '#eda346'
    },
    {
      title: 'Arena Sewing',
      description:
        'Arena Sewing is Arizona’s only complete contract cut & sew manufacturer with in-house prototyping and time study capabilities.',
      icon: 'Sewing',
      url: 'https://arenasewing.com/',
      color: '#e3686f'
    },
    {
      title: 'Arena Embroidery',
      description:
        'Arena Embroidery is Arizona’s Premier Embroidery Shop & Screen Printer. We specialize in Custom Embroidered Polos, T-Shirts, Patches, Hats, Jackets, Bags, and Logos for Corporate Apparel, Medical Apparel, School Uniforms, Sports Teams, and just about Everything Else.',
      icon: 'Embroidery',
      url: 'https://arenaembroidery.com/',
      color: '#54b9a9'
    },
    {
      title: 'Arena Prints',
      description:
        'Arena Prints offers Full Coverage Dye-Sublimation and Heat Transfer Printing, as well as cut-and-sew options. Dye-Sublimation makes full color, full coverage apparel printing possible, and there is no better way to get full coverage of your designs on premium apparel. Your graphic artwork and designs can easily cover the entire front and back of T-Shirts, Sports Uniforms, Yoga pants, Shorts, Hoodies, Bikinis and more. Dye-sublimation is ideal for low quantity, premium quality prints and can accomodate millions of color arrays.',
      icon: 'PrintingOrder',
      url: 'https://arenaprints.com/',
      color: '#6693e0'
    }
  ];

  public items: any[] = [
    {
      title: 'Free Graphic Design',
      description:
        'If your ideas aren’t embroidery ready or your images need optimizing, we can help for free.',
      icon: 'fad fa-fill-drip',
      url: 'https://shop.arenaprints.com/'
    },
    {
      title: 'Free Local Delivery',
      description:
        'If you live in or around Phoenix Arizona, delivery is free on all orders over $250.',
      icon: 'fad fa-car-building',
      url: 'https://arenasewing.com/'
    },
    {
      title: 'Price Match Guarantee',
      description:
        'If you can find a better quote elsewhere for the same embroidery order, we will match it.',
      icon: 'fad fa-money-check-edit-alt',
      url: 'https://arenaembroidery.com/'
    }
  ];

  constructor() {}

  public open(url) {
    window.open(`${url}`, '_blank');
  }
}
