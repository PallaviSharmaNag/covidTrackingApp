import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '../shared/shared-material.module';


import { PrecautionsComponent } from './precautions/precautions.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { HomepageCanActivateGuard } from './homepage-can-activate.guard';
import { StateDetailComponent } from 'src/app/homepage/state-detail/state-detail.component';
import { DashboardComponent } from 'src/app/homepage/dashboard/dashboard.component';


export const homepageRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'statedetail/:statecode', component: StateDetailComponent},
  {path: 'latestnews', component: LatestNewsComponent},
  {path: 'precautions', component: PrecautionsComponent},
  {path: 'addnews', component: AddNewsComponent, canActivate: [HomepageCanActivateGuard]},
];

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class HomepageRoutingModule { }
