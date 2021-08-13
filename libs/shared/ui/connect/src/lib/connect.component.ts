import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { DialogRef } from '@ngneat/dialog'

@Component({
  selector: 'xact-checkout-connect',
  templateUrl: './connect.component.html',
  styles: [
    `
      ::ng-deep .ngneat-dialog-content {
          background: transparent !important;
          box-shadow: none !important;
          animation: none !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectComponent {

  constructor(public ref: DialogRef) {
  }

}
