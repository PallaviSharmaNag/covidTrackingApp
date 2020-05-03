import { Component, OnInit } from '@angular/core';
import { CovidStatsService } from 'src/app/core/services/covid-stats.service';
import { IStateDetail, IDistrictDetail } from 'src/app/shared/interfaces/IStateDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDistrictData } from 'src/app/shared/interfaces/IDistrictData';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.scss']
})
export class StateDetailComponent implements OnInit {

  private stateDetail: IStateDetail;  
  districtDetails:  IDistrictData[];
  
  constructor(private covidStatsService: CovidStatsService, private activatedRoute: ActivatedRoute, 
    private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    let statecode: string;
    statecode = this.activatedRoute.snapshot.params.statecode;
    if(statecode){
      this.stateDetail = this.getCovidStateDistrictDetails(statecode);     
    }
    if(this.stateDetail){
      this.populateDistrictDetails();
    }
    else{     
      this.router.navigate(['/']);
      this.toastrService.warning("No such State found!", "Covid Tracking App");
    }
  } 

  getCovidStateDistrictDetails(statecode: string){   
   return this.covidStatsService.getStateDistrictDetails(statecode);   
  }

  populateDistrictDetails(){
    this.districtDetails = [];    
    for(let key in this.stateDetail.districtData){     
      let districtDetail: IDistrictData = {};
      districtDetail.key = key;
      districtDetail["districtDetail"] = this.stateDetail.districtData[key];
      if(districtDetail.districtDetail.notes==''){
        districtDetail.districtDetail.notes = '-'
      }
      this.districtDetails.push(districtDetail);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
