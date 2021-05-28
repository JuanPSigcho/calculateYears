import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculateFree';
  timeCalculated = '0';
  yearsBase = 0;
  monthBase = 0;
  percentTime = 60;

  returnMonthString(data: string) {
    let month = parseInt(data.substring(1));
    return (month / 10).toString().split('.')[0];
  }

  calculateTime() {
    //let calculateTime = 0;
    //let totalTime;
    let monthTotal;
    console.log(`years, ${this.yearsBase},  months ${this.monthBase}`);
    if (this.yearsBase > 0 || this.monthBase > 0) {
      let dataPercent = [];
      monthTotal = this.yearsBase * 12 + this.monthBase;
      //totalTime = (monthTotal * this.percentTime) / 100;
      //yearsPercent = totalTime / 12;

      //monthPercent = parseInt(yearsPercent.toString().split('.')[1]) * 1.2;
      // this.timeCalculated = `${yearsPercent.toString().split('.')[0]} years`;
      dataPercent = ((monthTotal * this.percentTime) / 100 / 12)
        .toString()
        .split('.');
      this.timeCalculated = `${dataPercent[0]} years`;
      if (dataPercent.length > 1) {
        this.timeCalculated = `${this.timeCalculated} ${(
          parseInt(dataPercent[1].substring(1)) * 1.2
        ).toFixed(0)} Months`;
      }
      console.log(`Percent of the time ${dataPercent}`);
    }
    console.log(` Month total ${monthTotal}`);
  }
}
