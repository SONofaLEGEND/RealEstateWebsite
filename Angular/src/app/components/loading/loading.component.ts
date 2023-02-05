import { Component, ElementRef, ViewChild } from '@angular/core';
import lottie from 'lottie-web';
import { AnimationItem } from 'lottie-web';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent{

  @ViewChild('animationContainer', { static: true }) animationContainer: ElementRef;
  constructor() {
    this.animationContainer = new ElementRef(null);
  }
  
  private animation: AnimationItem | undefined;

  ngOnInit() {
    const animationUrls = [
      'https://assets1.lottiefiles.com/packages/lf20_fwykef3x.json',
      'https://assets1.lottiefiles.com/packages/lf20_jLWnPUgQWY.json',
      'https://assets1.lottiefiles.com/packages/lf20_WtingzJ2Wx.json',
      'https://assets1.lottiefiles.com/private_files/lf30_lkwxd1nv.json',
      'https://assets1.lottiefiles.com/packages/lf20_s1y668kb.json',
      'https://assets1.lottiefiles.com/packages/lf20_9citnvs0.json',
      'https://assets1.lottiefiles.com/packages/lf20_a11nnB.json'

    ];
    const randomUrl = animationUrls[Math.floor(Math.random() * animationUrls.length)];
    fetch(randomUrl)
      .then(response => response.json())
      .then(data => {
        // Create a new animation instance
        this.animation = lottie.loadAnimation({
          container: this.animationContainer.nativeElement,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: data
        });
      });
  }
 }
