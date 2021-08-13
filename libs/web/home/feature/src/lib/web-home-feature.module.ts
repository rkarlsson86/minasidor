import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RouterModule } from '@angular/router'
import { SharedUiPageModule } from '@xact-checkout/shared/ui/page'
import { WebHomeUiTileModule } from '../../../ui/tile/src/lib/web-home-ui-tile.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    SharedUiPageModule,
    WebHomeUiTileModule
  ],
  declarations: [HomeComponent],
})
export class WebHomeFeatureModule {
}
