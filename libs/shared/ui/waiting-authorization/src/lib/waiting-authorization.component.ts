import { Component, ChangeDetectionStrategy } from '@angular/core'
import { DialogRef } from '@ngneat/dialog'

@Component({
  selector: 'xact-checkout-waiting-authorization',
  templateUrl: './waiting-authorization.component.html',
  styles: [
    `
        :host {
            display: block;
        }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingAuthorizationComponent {

  constructor(public ref: DialogRef) {
  }

}
