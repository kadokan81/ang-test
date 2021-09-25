import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  template: `
    <div>
      <div>
        <input
          type="text"
          [value]="detail.name"
          (input)="onNameChange(nameLocal.value)"
          #nameLocal
        />
      </div>
      <h2 class="pas_name">
        <span class="status" [class.checked-in]="detail.checkIn"></span>

        {{ detail.name }}
      </h2>
      <div class="date">
        Check in date :
        <span class="date_info">
          {{
            detail.dateChek ? (detail.dateChek | date: ' MMMM d y') : 'not yet'
          }}
        </span>
      </div>
      <div class="children">
        Children :
        {{ detail.children?.length ? detail.children?.length : 0 }}
      </div>
    </div>
  `,
  styleUrls: ['passenger-detail.component.css'],
})
export class PassengerDetailComponent {
  @Input() detail!: Passenger;
  constructor() {}

  onNameChange(name: string) {
    console.log(name);
  }
}
