import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRouterModule } from './app.router.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { BioComponent } from './bio/bio.component';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    ContactModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
