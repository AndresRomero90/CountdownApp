import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { DigitComponent } from 'src/app/components/digit/digit.component';



@NgModule({
  declarations: [
    CounterComponent,
    DigitComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
