import { Component, ChangeDetectionStrategy } from '@angular/core'
import { DialogRef } from '@ngneat/dialog'
import { Socket } from 'ngx-socket-io'
import { ConnectService } from './connect.service'
import { Observable } from 'rxjs'

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
  qrCode$: Observable<string> = this.service.getQrCode();

  constructor(public ref: DialogRef,
              private readonly service: ConnectService,
              private readonly socket: Socket) {
  }

}
