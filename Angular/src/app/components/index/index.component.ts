import { Component, ElementRef, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  isLogin!: boolean;
  loading = false;
  transitionBetweenPages() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
  constructor(private authService: AuthService, private router:Router,private cookieService: CookieService){}
  ngOnInit(): void {
    this.logincheck();  
    this.transitionBetweenPages();
  }
  logincheck(){
    if(this.cookieService.get('token')) 
    {this.isLogin = true;}
    else {this.isLogin = false;}
  }
  logOut() {
    this.authService.logout();
    this.logincheck();
  } 

}
