import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestzeroComponent } from '../restinfo/restzero/restzero.component';
import { RestoneComponent } from '../restinfo/restone/restone.component';
import { ResttwoComponent } from '../restinfo/resttwo/resttwo.component';
import { RestthreeComponent } from '../restinfo/restthree/restthree.component';
import { RestfourComponent } from '../restinfo/restfour/restfour.component';
import { RestfiveComponent } from '../restinfo/restfive/restfive.component';
import { RestsixComponent } from '../restinfo/restsix/restsix.component';
import { RestsevenComponent } from '../restinfo/restseven/restseven.component';
import { ResteightComponent } from '../restinfo/resteight/resteight.component';
import { RestnineComponent } from '../restinfo/restnine/restnine.component';  

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  menu=[
    {id:0,name:"TajHotel",place:"Mumbai",imageurl:"/assets/images/1.jpg",info:"Make your bookings directly with us for the most seamless experience and the best value. With compelling exclusive offers, Taj InnerCircle reward points, and the best rates guaranteed experience our sincere care even before you check in"},
    {id:1,name:"MouryaInn",place:"Kurnool",imageurl:"/assets/images/2.jpg",info:"Located in Kurnool, Mourya Lords Inn Kurnool features an outdoor swimming pool and a garden. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi throughout the property. "},
    {id:2,name:"Paradise",place:"Hyderabad",imageurl:"/assets/images/3.jpg",info:"Paradise food court is one among the finest and best restaurants in Hyderabad. We are world famous for our hyderabadi biryani Search for Biryani pot at Answerroot.com. Find info on Answerroot.com"},
    {id:3,name:"TheTable",place:"Mumbai",imageurl:"/assets/images/4.jpg",info:"When The Table first opened, its unusual menu and sharing plates immediately set it apart. Since then, the food has remained remarkably consistent, while evolving to reflect the growing bounty available at the restaurant’s farm in Alibag"},
    {id:4,name:"Bomras",place:"Goa",imageurl:"/assets/images/5.jpg",info:"In the land of fish curry and feni, there lies Goa’s best-kept Burmese secret, Bomra’s. This casual dining restaurant in Candolim, just a stone’s throw away from Fort Aguada Road, has become quite the sensation."},
    {id:5,name:"ToastandTonic",place:"Bengaluru",imageurl:"/assets/images/6.jpg",info:"This Bengaluru favourite is a celebration of all things local but with an eye on what the world is eating. Chef Manu Chandra is constantly experimenting. Bandel from Kolkata, Naga chilli, perilla seeds from"},
    {id:6,name:"koji",place:"Pune",imageurl:"/assets/images/7.jpg",info:"Conrad Pune is currently hosting a Dim Sum festival where their authentic Asian very good Specialty restaurant Koji will be whipping up a range of interesting, innovative & crowd- favorite Dim Sum."},
    {id:7,name:"RoyalChina",place:"Mumbai",imageurl:"/assets/images/8.jpg",info:"Royal China- Restaurant at Fort specifically serving the Asian Delicacy. Royal China isn’t the outlet by Mr. Neville Vazifdar, there’s more to it! Royal China has more other similar kind of restaurants like Kuai Kitchen and Jia Oriental Kitchen."},
    {id:8,name:"TheLeelaPalace",place:"Chennai",imageurl:"/assets/images/9.jpg",info:"The Leela Palace Chennai is a luxurious experience evoking the rich heritage of the palaces of Chettinad in grandness and captivating environs ensconced in the lap of nature and wrapped in the graciousness of Indianspace"},
    {id:9,name:"Diva",place:"NewDelhi",imageurl:"/assets/images/10.jpg",info:"Chef Ritu Dalmia’s molto chic Italian restaurant is an intimate space on two levels, with white tablecloths, plateglass windows, and a wood-fired oven behind glass. Cooking is superlative, imaginative and delicious. Avanti!"}
    ]
    showDialog0(list0)
    {
      this.dialog.open(RestzeroComponent,list0)
    }

    showDialog1(list1)
    {
      this.dialog.open(RestoneComponent,list1)
    }
    showDialog2(list2)
    {
      this.dialog.open(ResttwoComponent,list2)
    }
    showDialog3(list3)
    {
      this.dialog.open(RestthreeComponent,list3)
    }
    showDialog4(list4)
    {
      this.dialog.open(RestfourComponent,list4)
    }
    showDialog5(list5)
    {
      this.dialog.open(RestfiveComponent,list5)
    }
    showDialog6(list6)
    {
      this.dialog.open(RestsixComponent,list6)
    }
    showDialog7(list7)
    {
      this.dialog.open(RestsevenComponent,list7)
    }
    showDialog8(list8)
    {
      this.dialog.open(ResteightComponent,list8)
    }
    showDialog9(list9)
    {
      this.dialog.open(RestnineComponent,list9)
    }

  ngOnInit(): void {
  }

}
