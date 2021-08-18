import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { DialogRef } from '@ngneat/dialog'
import { ConnectService } from '@xact-checkout/shared/ui/connect'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { ToastrService } from 'ngx-toastr'
import { UserStore } from '@xact-checkout/shared/data-access/user-store'

@UntilDestroy()
@Component({
  selector: 'xact-checkout-waiting-authorization',
  templateUrl: './waiting-authorization.component.html',
  styles: [
    `
        ::ng-deep .ngneat-dialog-content {
            background: transparent !important;
            box-shadow: none !important;
            animation: none !important;
        }

        .spinner {
            animation: rotate 1.4s linear infinite;
            -webkit-animation: rotate 1.4s linear infinite;
            -moz-animation: rotate 1.4s linear infinite;
        }

        @keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }

        @-webkit-keyframes rotate {
            to {
                -webkit-transform: rotate(360deg);
            }
        }

        @-moz-keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingAuthorizationComponent implements OnInit {

  constructor(public ref: DialogRef,
              private readonly toastService: ToastrService,
              private readonly userStore: UserStore,
              private readonly connectService: ConnectService) {
  }

  ngOnInit() {
    this.connectService.listenForSellNFT()
      .pipe(untilDestroyed(this))
      .subscribe(async () => {
        try {
          this.ref.close()
          this.toastService.success('Your NFT is now on sell !')
          const user = await this.connectService.refreshNFT(this.ref.data.accountId)
          user && this.userStore.setUserEffect(user)
          /* TODO:: Redirect to the Checkout Page */
        } catch (e) {
        }
      })
  }

}
