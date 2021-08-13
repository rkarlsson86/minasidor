import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'xact-checkout-tile-loader',
  templateUrl: './tile-loader.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
