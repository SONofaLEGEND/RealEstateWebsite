import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  ngOnInit(): void {
    this.transitionBetweenPages();

  }
  loading = false;
  transitionBetweenPages() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}