import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restfour',
  templateUrl: './restfour.component.html',
  styleUrls: ['./restfour.component.css']
})
export class RestfourComponent implements OnInit {

  constructor() { }
   list4=["Pure Veg Meals","Jeera Fried Rice","Gobi Fried Rice","Tomato Rice","Masala Rice"]
  ngOnInit(): void {
  }

}
