import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'xact-checkout-sell',
  templateUrl: './sell.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
