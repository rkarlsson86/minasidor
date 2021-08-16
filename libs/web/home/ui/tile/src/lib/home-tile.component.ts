import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { NFT } from '@xact-wallet-sdk/client'


@Component({
  selector: 'xact-checkout-home-tile',
  templateUrl: './home-tile.component.html',
  styles: [
    ``,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTileComponent {
  @Input() nft!: NFT
}
