import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: [];

  Highcharts = Highcharts;
  
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Random DATA'
      },
      subtitle: {
          text: 'Demo'
      },
      
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: [{
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
      },]
  };

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

}
