import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    //NG module
    BrowserModule, AppRoutingModule, 
    //Custom module
    PassengerDashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
