import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RestComponent } from './rest/rest.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  
{path:'confirm',component:ConfirmationComponent},
{path:'',component:RestComponent},
{path:'view',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
