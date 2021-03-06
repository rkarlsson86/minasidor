import { Component, ChangeDetectionStrategy } from '@angular/core'
import { DialogRef } from '@ngneat/dialog'
import { ConnectService } from './connect.service'
import { Observable } from 'rxjs'
import { RequestValidation, UserAccount } from '@xact-wallet-sdk/client'
import { UserStore } from '@xact-checkout/shared/data-access/user-store'

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

        .lds-default {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
        }

        .lds-default div {
            position: absolute;
            width: 6px;
            height: 6px;
            background: #095178;
            border-radius: 50%;
            animation: lds-default 1.2s linear infinite;
        }

        .lds-default div:nth-child(1) {
            animation-delay: 0s;
            top: 37px;
            left: 66px;
        }

        .lds-default div:nth-child(2) {
            animation-delay: -0.1s;
            top: 22px;
            left: 62px;
        }

        .lds-default div:nth-child(3) {
            animation-delay: -0.2s;
            top: 11px;
            left: 52px;
        }

        .lds-default div:nth-child(4) {
            animation-delay: -0.3s;
            top: 7px;
            left: 37px;
        }

        .lds-default div:nth-child(5) {
            animation-delay: -0.4s;
            top: 11px;
            left: 22px;
        }

        .lds-default div:nth-child(6) {
            animation-delay: -0.5s;
            top: 22px;
            left: 11px;
        }

        .lds-default div:nth-child(7) {
            animation-delay: -0.6s;
            top: 37px;
            left: 7px;
        }

        .lds-default div:nth-child(8) {
            animation-delay: -0.7s;
            top: 52px;
            left: 11px;
        }

        .lds-default div:nth-child(9) {
            animation-delay: -0.8s;
            top: 62px;
            left: 22px;
        }

        .lds-default div:nth-child(10) {
            animation-delay: -0.9s;
            top: 66px;
            left: 37px;
        }

        .lds-default div:nth-child(11) {
            animation-delay: -1s;
            top: 62px;
            left: 52px;
        }

        .lds-default div:nth-child(12) {
            animation-delay: -1.1s;
            top: 52px;
            left: 62px;
        }

        @keyframes lds-default {
            0%, 20%, 80%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.5);
            }
        }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectComponent {
  qrCode$: Observable<string> = this.service.getQrCode()
  user$: Observable<RequestValidation<UserAccount>> = this.service.listenForAuth()

  constructor(public ref: DialogRef,
              private readonly service: ConnectService,
              private readonly userStore: UserStore) {
    this.user$.subscribe(user => {
      try {
        this.ref.close();
      } catch(e) {
        console.log('e', e);
      }
      this.userStore.setUserEffect(user)
    })
  }

}
