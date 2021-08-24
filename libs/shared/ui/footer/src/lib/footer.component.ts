import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xact-checkout-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

}
