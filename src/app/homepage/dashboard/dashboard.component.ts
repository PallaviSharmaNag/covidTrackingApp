import { Component, OnInit } from '@angular/core';

import { CovidStatsService } from 'src/app/core/services/covid-stats.service';
import { IState } from 'src/app/shared/interfaces/IState';


@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

/** Dashboard component class. */
export class DashboardComponent implements OnInit {

  covidStats : IState[]; 

  constructor(private covidStatsService: CovidStatsService) {
}
  ngOnInit() {
    this.getCovidStatsStateWise();
    this.getCovidStateDetails();
  }

  getCovidStatsStateWise(){
    this.covidStatsService.getStateList().subscribe(data => {
      this.covidStats = data;
      let index: number = this.covidStats.findIndex(stateStats => stateStats.statecode == 'TT');
        if (index != -1) {
            this.covidStats.splice(index, 1);
        }
    });    
  }

  getCovidStateDetails(){
    this.covidStatsService.getStateDetais().subscribe(data => {
    });
  }

 


}
