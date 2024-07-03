import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/**
 * Create a form input to enter the time\
 * maxlength === 2
 * Only numbers (positives and integer)
 * MM  and SS <= 59
 * create the label time
 * When click button change the components and clear action if needed
 * when time is over show alert or notification
 */
export class AppComponent {
  title = 'countdown-timer';
  showLabelTimer: boolean = false;
  timer: any;

  timeStarts(event: any) {
    this.showLabelTimer = true;
    this.timer = event;
  }

  reset() {
    this.showLabelTimer = false;
    this.timer = null;
  }
}
