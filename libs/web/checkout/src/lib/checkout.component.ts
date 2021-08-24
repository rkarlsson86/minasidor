import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable, tap } from 'rxjs'
import { NFTForSale } from '../../../../../../SDK/ts/packages/client'
import { ConnectService } from '@xact-checkout/shared/ui/connect'
import { HomeTileComponent } from '../../../home/ui/tile/src/lib/home-tile.component'

@Component({
  selector: 'xact-checkout-checkout',
  templateUrl: './checkout.component.html',
  styles: [
    `
        :host {
            display: block;
        }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  tokenId: string
  nft$!: Observable<NFTForSale & { media: string }>
  type!: string;
  constructor(private readonly route: ActivatedRoute,
              private readonly connectService: ConnectService,
              private readonly router: Router) {
    this.tokenId = this.route.snapshot.paramMap.get('tokenId') as string
    if (!this.tokenId) {
      this.router.navigate(['/'])
      return
    } else {
      this.nft$ = this.connectService.getNFTForSale(this.tokenId).pipe(
        tap(nft => {
          this.type = HomeTileComponent.getTypeNft(nft.media)
        })
      )
    }
  }

}
