import { Component, OnInit } from '@angular/core';
import {CommonService} from 'C:/Users/palad/Desktop/final4/src/app/common.service';  

@Component({
  selector: 'app-restzero',
  templateUrl: './restzero.component.html',
  styleUrls: ['./restzero.component.css']
})
export class RestzeroComponent implements OnInit {
  Repdata: any;

  constructor(private newService :CommonService) { }
  ngOnInit(): void {
    this.newService.GetUser().subscribe(data =>  this.Repdata = data)  
  }
  list0=["Choco Milkshake","Black Forest","Venilla Icecream","Cool Cake","Cone Icecream"]

}
