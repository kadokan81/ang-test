import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PassengeerCountComponent } from './components/passengeer-count/passengeer-count.copmonent';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengeerCountComponent,
    PassengerDetailComponent,
  ],
  imports: [CommonModule],
  exports: [PassengerDashboardComponent],
})
export class PassengerDashboardModule {}
