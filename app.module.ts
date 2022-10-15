import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule,NgForm} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { RouterModule,Routes } from '@angular/router';
import { DiaComponent } from './dia/dia.component';
import { RestComponent } from './rest/rest.component';
import { RestzeroComponent } from './restinfo/restzero/restzero.component';
import { RestoneComponent } from './restinfo/restone/restone.component';
import { ResttwoComponent } from './restinfo/resttwo/resttwo.component';
import { RestthreeComponent } from './restinfo/restthree/restthree.component';
import { RestfourComponent } from './restinfo/restfour/restfour.component';
import { RestfiveComponent } from './restinfo/restfive/restfive.component';
import { RestsixComponent } from './restinfo/restsix/restsix.component';
import { RestsevenComponent } from './restinfo/restseven/restseven.component';
import { ResteightComponent } from './restinfo/resteight/resteight.component';
import { RestnineComponent } from './restinfo/restnine/restnine.component';  
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component'
@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    DiaComponent,
    RestComponent,
    RestzeroComponent,
    RestoneComponent,
    ResttwoComponent,
    RestthreeComponent,
    RestfourComponent,
    RestfiveComponent,
    RestsixComponent,
    RestsevenComponent,
    ResteightComponent,
    RestnineComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatRadioModule,MatInputModule,MatButtonModule,ReactiveFormsModule,MatDatepickerModule,MatNativeDateModule,RouterModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
