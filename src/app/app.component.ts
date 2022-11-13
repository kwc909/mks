import { Component } from '@angular/core';
import { faClock, faTrashCan, faBell, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import SwiperCore, { SwiperOptions, Pagination } from "swiper";
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';
  faTrashCan = faTrashCan;
  faClock = faClock;
  faBell = faBell;
  faSquarePlus = faSquarePlus;
  menuIndex = 0;
  menu = ['All','Electronic','Small Appliance','Fashion','Gadgets','Homeware','Kitchen Appliances','Furnitures','TV & Audio','Promotions'];
  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: { clickable: true },
  };
  clickMenu(index: number){
    this.menuIndex = index;    
  }
  products = [
    {point: 1000, image_url: 'assets/iphone.jpg', subject: 'iPhone 14 Pro Max', desc: 'A magical new way to interact with iPhone.'},
    {point: 1000, image_url: 'assets/iphone.jpg', subject: 'iPhone 14 Pro Max', desc: 'A magical new way to interact with iPhone.'},
    {point: 1000, image_url: 'assets/iphone.jpg', subject: 'iPhone 14 Pro Max', desc: 'A magical new way to interact with iPhone.'},
  ]
}
