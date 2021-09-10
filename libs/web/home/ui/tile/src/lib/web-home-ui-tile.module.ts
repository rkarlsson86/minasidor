import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WebHomeUiTileModule {
}
