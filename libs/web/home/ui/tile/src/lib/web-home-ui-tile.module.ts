import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeTileComponent } from './home-tile.component'

@NgModule({
  imports: [CommonModule],
  declarations: [
    HomeTileComponent,
  ],
  exports: [
    HomeTileComponent,
  ],
})
export class WebHomeUiTileModule {
}
