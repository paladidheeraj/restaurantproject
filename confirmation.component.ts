import { Component, OnInit,ViewChild } from '@angular/core';
import {  Validators,FormBuilder,NgForm} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DiaComponent } from '../dia/dia.component';
import {CommonService} from '../common.service';  

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
  
})
export class ConfirmationComponent implements OnInit {
  @ViewChild('userForm', {static: false}) grantAccessForm:NgForm;

 constructor(private newService :CommonService,private fb:FormBuilder,private dialog:MatDialog)
{}
Repdata;
dataModel: any = {};  
valbutton ="Save";

    ngOnInit(): void {
      this.newService.GetUser().subscribe(data =>  this.Repdata = data)  
    }

    regform=this.fb.group({
      name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      id:['',[Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
      mobno:['',Validators.required,Validators.minLength(10),Validators.maxLength(10)],
      email:['',[Validators.required,Validators.minLength(8),Validators.email]],
      payment:[''],
      address:['',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
      }); 
    onSave = function(user) {    
      this.isSubmitted = false;
      user.mode= this.valbutton;  
       this.newService.saveUser(user)  
       .subscribe(data =>  {  alert(data.data);  
            
         this.ngOnInit();    
       }   
       , error => this.errorMessage = error )  
         
     }      

opendialog()
{
  this.dialog.open(DiaComponent)
}
}