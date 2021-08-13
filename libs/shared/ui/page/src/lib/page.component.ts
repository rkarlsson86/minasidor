import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'xact-checkout-page',
  templateUrl: './page.component.html',
  styles: [
    `
        :host {
            display: block;
        }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
}
