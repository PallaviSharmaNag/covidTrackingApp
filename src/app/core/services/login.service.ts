import { Injectable } from '@angular/core';
import { IUser } from '../../shared/interfaces/IUser';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

/** This is a Login service. */
export class LoginService {

  private apiURL = "api/adminDetail";

   /** Array of login user data. */
   private loginData: IUser[];

  constructor(private http: HttpClient) {
    this.getUsers();
   }

  /** GET ALL user detail. */
  getUsersDetails(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiURL);
  }

  /** Method to get all login user data. */
  getUsers(): IUser[] {
    this.getUsersDetails().subscribe(data => {
      this.loginData = data;
    });
    return this.loginData;
  }

  /** Method that validates login credentials passed by user. */
  validateUser(user: IUser): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1) {
      if (this.loginData.findIndex(usr => user.password.toLowerCase() === usr.password.toLowerCase()) > -1)
        validUser = true;
    }
    return validUser;
  }

  getisLoggedIn(){
    if (localStorage.getItem('TOKEN') !== null) {
      return true;
    }else{
      return false;
    }
  }

}
