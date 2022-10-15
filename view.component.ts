import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';  
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private newService :CommonService) { }
  Repdata;
  ngOnInit(): void {
    this.newService.GetUser().subscribe(data =>  this.Repdata = data)
  }
  edit = function(kk) {  
  
    this.name= kk.name;  
    this.id = kk._id;
    this.mobno=kk.mobno;
    this.email=kk.email;
    this.payment=kk.payment;
    this.address= kk.address;  

    this.valbutton ="Update";  
    }  
      
    delete = function(id) {  
    this.newService.deleteUser(id)  
    .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
    }  

}
