import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculateFree';
  timeCalculated = 0;
  yearsBase = 0;
  monthBase = 0;
  percentTime = 60;

  calculateTime() {
    //let calculateTime = 0;
    if (this.yearsBase > 0 || this.monthBase > 0) {
      console.log('years', this.yearsBase, this.monthBase);
      this.timeCalculated = (this.yearsBase * this.percentTime) / 100;
    }
    console.log('entre', this.timeCalculated);
  }
}
