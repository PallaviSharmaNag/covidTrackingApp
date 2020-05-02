// This is dashboard feature module.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { HomepageRoutingModule } from './homepage-routing.module';

import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { DashboardComponent } from 'src/app/homepage/dashboard/dashboard.component';
import { StateDetailComponent } from 'src/app/homepage/state-detail/state-detail.component';


/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [DashboardComponent, LatestNewsComponent, PrecautionsComponent, AddNewsComponent, StateDetailComponent],
  imports: [
    CommonModule,
    LoginModule,
    HomepageRoutingModule,
  
  ],
  exports: [
    DashboardComponent,
    HomepageRoutingModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class HomepageModule {
  constructor() {
    console.log("Homepage Module loaded.");
  }
 }
