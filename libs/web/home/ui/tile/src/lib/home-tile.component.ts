import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, OnInit } from '@angular/core'
import { NFT } from '../../../../../../../../SDK/ts/packages/client'
import { HttpClient } from '@angular/common/http'
import { map, Observable, of } from 'rxjs'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const mime = require('mime')

@Component({
  selector: 'xact-checkout-home-tile',
  templateUrl: './home-tile.component.html',
  styles: [
    ``,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTileComponent implements OnInit {
  @Input() nft!: NFT
  @Output() sellNFT: EventEmitter<NFT> = new EventEmitter<NFT>()

  media$!: Observable<string>
  type: string | null = null

  constructor(private readonly http: HttpClient) {
  }


  ngOnInit() {
    if (this.nft.cid) {
      this.media$ = this.http.get(this.nft.url)
        .pipe(
          map((res: any) => {
            this.type = HomeTileComponent.getTypeNft(res.photo)
            return res.photo
          }))
    } else {
      this.media$ = of('https://images.unsplash.com/photo-1506792006437-256b665541e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80')
    }
  }

  static getTypeNft(link: string): string {
    if (link && link.includes('audio')) {
      return 'audio'
    } else if (link && link.includes('video')) {
      return 'video'
    } else if (link && link.includes('application/pdf')) {
      return 'file'
    } else if (link && link.includes('image')) {
      return 'image'
    } else if (link && link.includes('https')) {
      const type = mime.getType(link)
      return this.getTypeNft(type)
    } else {
      return 'any'
    }
  }

  sellHandler(nft: NFT) {
    this.sellNFT.emit(nft)
  }
}
