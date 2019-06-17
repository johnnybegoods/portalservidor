import { Component, OnInit } from '@angular/core';

import { timer } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  index: number = 0;
  display1: number = 1;
  display2: number = 1;
  display3: number = 1;
  display4: number = 1;



  setIndexImage1(){
    this.display1 = 1;
    this.display2 = 0;
    this.display3 = 0;
    this.display4 = 0;
  }

  setIndexImage2(){
    this.display1 = 0;
    this.display2 = 1;
    this.display3 = 0;
    this.display4 = 0;
  }

  setIndexImage3(){
    this.display1 = 0;
    this.display2 = 0;
    this.display3 = 1;
    this.display4 = 0;
  }

  setIndexImage4(){
    this.display1 = 0;
    this.display2 = 0;
    this.display3 = 0;
    this.display4 = 1;
  }

  setIndexAuto(){
    switch (this.index){
      case 0:
        this.index++;
        this.setIndexImage1();
      break;
      case 1:
        this.index++;
        this.setIndexImage2();
      break;
      case 2:
        this.index++;
        this.setIndexImage3();
      break;
      case 3:
        this.index = 0;
        this.setIndexImage4();
      break;
    }
  }
  
  

  constructor() { 

  }

  ngOnInit() {
    setInterval(() => {
    this.setIndexAuto(); 
  }, 5000);
  }

}
