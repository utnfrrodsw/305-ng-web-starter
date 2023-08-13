import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRouterModule } from './contact.router.module';
import { ContactLayoutComponent } from './contact-layout/contact-layout.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactComponent,
    ContactLayoutComponent
  ],
  imports: [
    CommonModule,
    ContactRouterModule,
    ReactiveFormsModule,
  ]
})
export class ContactModule { }
