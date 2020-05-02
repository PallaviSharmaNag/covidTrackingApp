import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  // isLoggedIn = false;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  getIsLoggedIn(){
    return this.loginService.getisLoggedIn();
  }

}
