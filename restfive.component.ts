import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restfive',
  templateUrl: './restfive.component.html',
  styleUrls: ['./restfive.component.css']
})
export class RestfiveComponent implements OnInit {

  constructor() { }
  list5=["Paneer Curry","Cashew Curry","Paneer Tikka Masala","Paneer Butter Masala"]
  ngOnInit(): void {
  }

}
