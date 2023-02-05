import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-neighborhoods',
  templateUrl: './neighborhoods.component.html',
  styleUrls: ['./neighborhoods.component.css']
})
export class NeighborhoodsComponent implements OnInit{
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
}