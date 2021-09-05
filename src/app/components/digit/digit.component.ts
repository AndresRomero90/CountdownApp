import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit, OnChanges {
  @Input('name') name: string | undefined;
  @Input('value') value: number | undefined;
  @ViewChild('upper') upper: ElementRef | undefined;
  @ViewChild('lower') lower: ElementRef | undefined;
  @ViewChild('upperFlip') upperFlip: ElementRef | undefined;
  @ViewChild('lowerFlip') lowerFlip: ElementRef | undefined;

  public upperCount: string | undefined;
  public lowerCount: string | undefined;
  public upperCountFlip: string | undefined;
  public lowerCountFlip: string | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.value.firstChange) {
      const upperFlipCB = () => {
        this.upperFlip?.nativeElement.removeEventListener('animationend', lowerFlipCB);
        this.upperFlip?.nativeElement.classList.remove('flip');
        this.upperCountFlip = changes.value.currentValue.toString().padStart(2, '0');
      }

      const lowerFlipCB = () => {
        this.lowerFlip?.nativeElement.removeEventListener('animationend', lowerFlipCB);
        this.lowerFlip?.nativeElement.classList.remove('flip');
        this.lowerCount = changes.value.currentValue.toString().padStart(2, '0');
      }

      const lowerFlipStartCB = () => {
        this.lowerFlip?.nativeElement.removeEventListener('animationstart', lowerFlipStartCB);
        this.lowerCountFlip = changes.value.currentValue.toString().padStart(2, '0');
      }

      this.upperCountFlip = changes.value.previousValue.toString().padStart(2, '0');
      this.upperCount = changes.value.currentValue.toString().padStart(2, '0');
      this.lowerCountFlip = changes.value.previousValue.toString().padStart(2, '0');
      this.lowerCount = changes.value.previousValue.toString().padStart(2, '0');

      this.upperFlip?.nativeElement.classList.add('flip');
      this.lowerFlip?.nativeElement.classList.add('flip');
      this.upperFlip?.nativeElement.addEventListener('animationend', upperFlipCB);
      this.lowerFlip?.nativeElement.addEventListener('animationstart', lowerFlipStartCB);
      this.lowerFlip?.nativeElement.addEventListener('animationend', lowerFlipCB);
    }
  }

  ngOnInit(): void {
    this.upperCount = this.value?.toString().padStart(2, '0');
    this.lowerCount = this.value?.toString().padStart(2, '0');
    this.upperCountFlip = this.value?.toString().padStart(2, '0');
    this.lowerCountFlip = this.value?.toString().padStart(2, '0');
  }

}
