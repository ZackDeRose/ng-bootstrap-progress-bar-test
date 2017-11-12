import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  green: number;
  blue: number;
  blueMax: number;

  constructor() {
    this.green = 0;
    this.blue = 0;
    this.blueMax = 1000;
  }

  addGreen(){
    this.green += 10;
  }

  addBlue(){
    for(let i=0; i<100; i++){
      this.blue++;
    }
    for(let i=0; i<10; i++){
      this.blue--;
    }
    this.blue++;
  }
  getBluePercentage(): number {
    return this.blue *100 / this.blueMax;
  }
}
