import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { FormComponent } from './component/form/form.component';


const routes: Routes = [
{path: 'form', component : FormComponent},
{path: 'contact', component : ContactComponent},
{path : '**', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
