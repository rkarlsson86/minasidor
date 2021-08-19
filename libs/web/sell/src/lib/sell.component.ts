import { Component, ChangeDetectionStrategy } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { NFT, UserAccount } from '../../../../../../SDK/ts/packages/client'
import { ToastrService } from 'ngx-toastr'
import { ConnectService } from '@xact-checkout/shared/ui/connect'
import { UserStore } from '@xact-checkout/shared/data-access/user-store'
import { RequestService } from '@xact-checkout/shared/ui/waiting-authorization'

@Component({
  selector: 'xact-checkout-sell',
  templateUrl: './sell.component.html',
  styles: [
    `
        :host {
            display: block;
        }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SellComponent {

  vm$ = this.userStore.vm$

  sellForm: FormGroup = this.fb.group({
    hbarAmount: ['', Validators.required],
    quantity: ['', Validators.required],
  })

  nft!: NFT

  constructor(private readonly fb: FormBuilder,
              private readonly toastService: ToastrService,
              private readonly userStore: UserStore,
              private readonly requestService: RequestService,
              private readonly connectService: ConnectService,
              private readonly router: Router) {
    this.nft = { ...this.router.getCurrentNavigation()?.extras.state?.nft }
    if (Object.keys(this.nft).length === 0) {
      this.router.navigateByUrl('/')
    } else {
      if (this.nft.forSale) {
        this.sellForm.patchValue({...this.nft.forSale})
      }
    }
  }

  async sell(user: UserAccount) {
    try {
      if (this.sellForm.get('quantity')?.value > this.nft.supply) {
        this.toastService.error(`Note: the max quantity must be ${this.nft.supply}`)
        return
      }
      // @ts-ignore
      delete this.nft.url
      await this.connectService.sellNFT({
        fromAccountId: user.accountId,
        quantity: this.sellForm.get('quantity')?.value,
        hbarAmount: this.sellForm.get('hbarAmount')?.value,
        nft: this.nft
      })
      this.requestService.open({
        title: 'Waiting for request Validation...',
        subtitle: 'Please Validate the Request from Xact Wallet',
        accountId: user.accountId
      });
    } catch (e) {
      this.toastService.error('Sorry an internal error occurred!')
      console.error(e)
    }
  }
}
