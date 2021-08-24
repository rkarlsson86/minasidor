import { Component, ChangeDetectionStrategy } from '@angular/core'
import { UserStore } from '@xact-checkout/shared/data-access/user-store'
import { ConnectService } from '@xact-checkout/shared/ui/connect'
import { NFT } from '@xact-wallet-sdk/client'
import { Router } from '@angular/router'

@Component({
  selector: 'xact-checkout-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  vm$ = this.userStore.vm$
  isLoading$ = this.userStore.isLoading$

  constructor(private readonly userStore: UserStore,
              private readonly router: Router,
              private readonly connectService: ConnectService) {
  }

  connect() {
    return this.connectService.open()
  }

  redirectSell(nft: NFT) {
    return this.router.navigateByUrl('/app/sell', { state: { nft } })
  }
}
