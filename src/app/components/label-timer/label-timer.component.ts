import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'label-timer',
  templateUrl: './label-timer.component.html',
  styleUrls: ['./label-timer.component.scss']
})
export class LabelTimerComponent implements OnInit {

  @Input() timer: any;

  hours:      string = '';
  minutes:    string = '';
  seconds:    string = '';
  interval:   any;
  isPaused:   boolean = false;
  buttonText: string = 'Pause';

  @Output() onReset = new EventEmitter<void>();

  ngOnInit(): void {
    this.hours   = this.pad(parseInt(this.timer.hour));
    this.minutes = this.pad(parseInt(this.timer.minute));
    this.seconds = this.pad(parseInt(this.timer.second));
    this.startTimer();
  }

  startTimer() {
    let hours   = parseInt(this.timer.hour);
    let minutes = parseInt(this.timer.minute);
    let seconds = parseInt(this.timer.second);

    this.interval = setInterval(() => {
      if (!this.isPaused) {
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else {
          clearInterval(this.interval);
        }
        this.updateDisplay(hours, minutes, seconds);
      }
    }, 1000);
  }

  updateDisplay(hours: number, minutes: number, seconds: number) {
    this.hours   = this.pad(hours);
    this.minutes = this.pad(minutes);
    this.seconds = this.pad(seconds);
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  pause() {
    this.isPaused = !this.isPaused;
    this.buttonText = this.isPaused ? 'Play' : 'Pause';
  }

  reset() {
    clearInterval(this.interval);
    this.onReset.emit();
  }

}
