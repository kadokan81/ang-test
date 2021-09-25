import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passengeer-count',
  template: ` <div>
    <h2>Total check in {{ checkInCount() }} from {{ items.length }}</h2>
  </div>`,
  styleUrls: ['passengeer-count.component.css'],
})
export class PassengeerCountComponent {
  @Input() items!: Passenger[];
  checkInCount(): number | void {
    if (!this.items) return;
    return this.items.filter((pas: Passenger) => pas.checkIn).length;
  }

  constructor() {}
}
