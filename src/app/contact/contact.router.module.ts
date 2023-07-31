import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactLayoutComponent } from './contact-layout/contact-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContactLayoutComponent,
    children: [
      {
        path: 'mensaje',
        component: ContactComponent
      },
      {
        path: '**',
        redirectTo: 'mensaje'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class ContactRouterModule { }
