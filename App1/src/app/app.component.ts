import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
  title = 'omiMahi';
  listdata = [
    {
      routerLink: 'omi',
      dataToDisplay: 'Omi'
    },
    {
      routerLink: 'mahi',
      dataToDisplay: 'Mahi'
    },
    {
      routerLink: 'naitik',
      dataToDisplay: 'Naitik'
    },
    {
      routerLink: 'shubham',
      dataToDisplay: 'Shubham'
    }
  ];
}
