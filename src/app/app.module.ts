import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './UserComponent/user.component';
import { AddressComponent } from './AddressComponent/address.component';
import { CompanyComponent } from './CompanyComponent/company.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
