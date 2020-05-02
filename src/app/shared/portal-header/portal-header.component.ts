import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.css']
})
export class PortalHeaderComponent implements OnInit {

  // variable to check user is logged in or not.
  isLoggedIn = false;

  //title of the application
  pageTitle = "Covid Tracking App";

  // variable that holds user name.
  username = '';
  constructor(private route: Router, private toastrService: ToastrService, private loginService: LoginService) { }

  /**
   * sets the user name on the header.
   */
  ngOnInit() {
    this.getisLoggedIn();
  }

  getisLoggedIn(){
    if (this.loginService.getisLoggedIn()) {
      this.username = 'Log out ' + localStorage.getItem('username');
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
  /**
   * Method that logout the user from the portal.
   */
  logout() {
    localStorage.clear();
    this.isLoggedIn = false;
    this.route.navigate(['/homepage']);
    this.toastrService.success('Logged out successfully!');
  }

  /**
   * Method that login the user in the portal.
   */
  login() {
    this.route.navigate(['/login']);
  }

}
