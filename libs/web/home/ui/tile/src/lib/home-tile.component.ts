import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { Nft } from '@xact-checkout/shared/data-access/models'

@Component({
  selector: 'xact-checkout-home-tile',
  templateUrl: './home-tile.component.html',
  styles: [
    ``,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTileComponent {
  @Input() nft!: Nft
}
