import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restone',
  templateUrl: './restone.component.html',
  styleUrls: ['./restone.component.css']
})
export class RestoneComponent implements OnInit {

  constructor() { }
  list1=["Veg Biryani","Schewazan Rice","Color Rice","Pongal Rice","Sambar Rice"]
  ngOnInit(): void {
  }

}
