import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeTileComponent } from './home-tile.component'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HomeTileComponent,
  ],
  exports: [
    HomeTileComponent,
  ],
})
export class WebHomeUiTileModule {
}
