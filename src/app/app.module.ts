import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerFormComponent } from './components/timer-form/timer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelTimerComponent } from './components/label-timer/label-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerFormComponent,
    LabelTimerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
