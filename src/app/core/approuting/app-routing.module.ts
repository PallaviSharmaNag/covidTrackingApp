import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from '../../login/login.module';
import { HomepageModule} from '../../homepage/homepage.module';
import { homepageRoutes } from '../../homepage/homepage-routing.module';
import { AdminLoginComponent } from '../../login/admin-login/admin-login.component';
import { PageNotFoundComponent } from '../../shared/pagenotfound/page-not-found/page-not-found.component';
import { PageNotFoundModule } from '../../shared/pagenotfound/pagenotfound.module';
import { HomepageComponent } from '../../homepage/homepage/homepage.component';

export const routes: Routes = [
  {path:'', redirectTo: 'homepage', pathMatch:'full'},
  {path:'homepage', component: HomepageComponent, children: [...homepageRoutes]},
  {path:'login', component: AdminLoginComponent},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            LoginModule,
            PageNotFoundModule,
            HomepageModule
  ],
  exports: [RouterModule,
            LoginModule,
            PageNotFoundModule,
            HomepageModule
  ]
})
export class AppRoutingModule {
  constructor() {
    console.log("App routing module loaded.")
  }
 }
