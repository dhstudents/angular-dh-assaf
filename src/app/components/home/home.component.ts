import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  MMMyyyy = new Date();
  discount = 10;
  imageWidth : number = 300



  constructor(private title: Title) { 
    this.imageWidth = 300;
  }

  ngOnInit() {
    this.title.setTitle("Home page - PRODUCTS")
  }

  incImageWidth() {
    this.imageWidth += 10;
  }
  decImageWidth() {
    this.imageWidth -= 10;
  }
  resetImageWidth() {
    this.imageWidth = 300;
  }

}