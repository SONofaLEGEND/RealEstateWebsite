import { Component, ElementRef, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { Title, Meta } from '@angular/platform-browser';
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
  constructor(private authService: AuthService, private router:Router,private cookieService: CookieService, private titleService:Title, private meta:Meta){}
  ngOnInit(): void {
    this.logincheck();  
    this.transitionBetweenPages();
    this.titleService.setTitle('TheMadrasReators');
    this.meta.addTag({ rel: 'icon', href: '../../../favicon.ico' })
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
