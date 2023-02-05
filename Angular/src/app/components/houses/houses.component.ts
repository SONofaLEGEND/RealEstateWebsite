import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit{


  loading = false;
  areas = [
    'Anna Nagar', 'Adyar', 'Chrompet', 'KK Nagar', 'T Nagar', 'Karapakkam', 'Velachery', 'Triplicane'
  ];
  bedrooms = [ 1 , 2 , 2 , 3 , 2 , 3 , 4 , 2];

  bathrooms = [ 1 , 1 , 1 , 2 , 1 , 1 , 2 , 1];

  sqft = [ 650 , 800 , 1000 , 1550 , 950 , 1050 , 1950 , 750];

  images = [
    {src: '../../../assets/images/house1.jpg'},
    {src: '../../../assets/images/house2.jpg'},
    {src: '../../../assets/images/house3.webp'},
    {src: '../../../assets/images/house4.jpg'},
    {src: '../../../assets/images/house5.jpg'},
    {src: '../../../assets/images/house6.webp'},
    {src: '../../../assets/images/house7.jpg'},
    {src: '../../../assets/images/house8.jpg'},
  ]
  
  properties = [
    {area: 'Anna Nagar', bhk: 1, bathroom: 1, sqft: 650, image: '../../../assets/images/house1.jpg'},
    {area: 'Adyar', bhk: 2, bathroom: 1, sqft: 950, image: '../../../assets/images/house2.jpeg'},
    {area: 'Chrompet', bhk: 4, bathroom: 2, sqft: 1750, image: '../../../assets/images/house3.webp'},
    {area: 'T Nagar', bhk: 2, bathroom: 1, sqft: 1000, image: '../../../assets/images/house4.jpg'},
    {area: 'KK Nagar', bhk: 2, bathroom: 1, sqft: 1050, image: '../../../assets/images/house5.jpg'},
    {area: 'Velachery', bhk: 3, bathroom: 2, sqft: 1550, image: '../../../assets/images/house6.webp'},
    {area: 'Triplicane', bhk: 2, bathroom: 1, sqft: 950, image: '../../../assets/images/house7.jpg'},
    {area: 'Royapetta', bhk: 1, bathroom: 1, sqft: 700, image: '../../../assets/images/house8.jpg'}
  ]
  bhks = [
    { value: 1, label: '1BHK'},
    { value: 2, label: '2BHK'},
    { value: 3, label: '3BHK'},
    { value: 4, label: '4BHK'}
  ]

  houseForm!: FormGroup;
  constructor(private cookieService: CookieService, private formBuilder: FormBuilder){}
  transitionBetweenPages() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
  ngOnInit(): void {
    this.transitionBetweenPages();
    this.houseForm = this.formBuilder.group({
      area: "",
      bhk: ""
    });
  }

  filterhouse() {
    console.log(this.houseForm.value);
  }

}

