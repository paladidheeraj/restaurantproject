import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restthree',
  templateUrl: './restthree.component.html',
  styleUrls: ['./restthree.component.css']
})
export class RestthreeComponent implements OnInit {

  constructor() { }
  list3=["Mushroom Bytes","Egg Rolls","Gobi 65","Samosa Chat","Potato Chat"]
  ngOnInit(): void {
  }

}
