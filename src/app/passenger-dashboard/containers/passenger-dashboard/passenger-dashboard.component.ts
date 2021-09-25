import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.css'],
  template: `
    <div>
      <h1>List of Passengers</h1>
      <passengeer-count [items]="passengers"></passengeer-count>

      <passenger-detail
        *ngFor="let passenger of passengers; let i = index"
        [detail]="passenger"
      ></passenger-detail>
      <br />
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers!: Passenger[];
  constructor() {}
  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        name: 'Alex',
        checkIn: true,
        dateChek: 1632499507850,
        children: null,
      },
      {
        id: 2,
        name: 'Valia',
        checkIn: false,
        dateChek: null,
        children: [
          { name: 'Tod', age: 12 },
          { name: 'Chloe', age: 16 },
        ],
      },
      {
        id: 3,
        name: 'Anna',
        checkIn: true,
        dateChek: 1632499507850,
        children: null,
      },
      {
        id: 4,
        name: 'Nata',
        checkIn: true,
        dateChek: 1632499507850,
        children: [{ name: 'Mark', age: 5 }],
      },
      {
        id: 2,
        name: 'Serg',
        checkIn: false,
        dateChek: null,
        children: [
          { name: 'Un', age: 12 },
          { name: 'Jessa', age: 16 },
        ],
      },
    ];
  }
}
