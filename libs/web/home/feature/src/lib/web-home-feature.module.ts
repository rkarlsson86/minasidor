import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RouterModule } from '@angular/router'
import { SharedUiPageModule } from '@xact-checkout/shared/ui/page'

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
  ],
  declarations: [HomeComponent],
})
export class WebHomeFeatureModule {
}
