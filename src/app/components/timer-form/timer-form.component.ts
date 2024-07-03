import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent implements OnInit {

  form!: FormGroup;

  @Output() onTimeStarts = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      hour: [null, [
        Validators.required,
        Validators.maxLength(2)
      ]],
      minute: [null, [
        Validators.required,
        Validators.maxLength(2),
        Validators.max(59),
        Validators.min(0)
      ]],
      second: [null, [
        Validators.required,
        Validators.maxLength(2),
        Validators.max(59),
        Validators.min(0)
      ]]
    })
  }

  get hour() {
    return this.form.get('hour');
  }

  get minute() {
    return this.form.get('minute');
  }

  get second() {
    return this.form.get('second');
  }

  onlyNumbers(event: KeyboardEvent) {
    const regex = /\D/;
    if (regex.test(event.key)) {
      event.preventDefault();
    }
  }

  checkMaxTime(controlName: string) {
    if (controlName === 'minute') {
      if (this.minute?.value > 59) {
        this.minute?.setValue('00');
      } 
    } else {
      if (this.second?.value > 59) {
        this.second?.setValue('00');
      } 
    }
  }

  start() {
    if (this.form.valid) {
      this.onTimeStarts.emit(
        {
          hour: this.hour?.value,
          minute: this.minute?.value,
          second: this.second?.value
        }
      )
    }
  }
}
