import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 836, 947, 1402, 3624, 5268]
    },
    {
      name: 'Africa',
      data: [106, 109, 115, 127, 232, 454, 898]
    },
    {
      name: 'Europe',
      data: [143, 235, 326, 510, 702, 924, 1268]
    },
    {
      name: 'America',
      data: [18, 35, 86, 127, 212, 354, 568]
    },
    {
      name: 'Oceania',
      data: [2, 5, 8, 17, 22, 34, 52]
    },
    ];
  }
  cards() {
    return [71, 78, 39, 66];
  }
  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
  }, {
      name: 'Internet Explorer',
      y: 11.84
  }, {
      name: 'Firefox',
      y: 10.85
  }, {
      name: 'Edge',
      y: 4.67
  }, {
      name: 'Safari',
      y: 4.18
  }, {
      name: 'Sogou Explorer',
      y: 1.64
  }, {
      name: 'Opera',
      y: 1.6
  }, {
      name: 'QQ',
      y: 1.2
  }, {
      name: 'Other',
      y: 2.61
  }];
  }
}
