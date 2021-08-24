import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RouterModule } from '@angular/router'
import { SharedUiPageModule } from '@xact-checkout/shared/ui/page'
import { WebHomeUiTileModule } from '@xact-checkout/web/home/ui/tile'
import { WebHomeUiTileLoaderModule } from '@xact-checkout/web/home/ui/tile-loader'

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
    WebHomeUiTileModule,
    WebHomeUiTileLoaderModule,
  ],
  declarations: [HomeComponent],
})
export class WebHomeFeatureModule {
}
