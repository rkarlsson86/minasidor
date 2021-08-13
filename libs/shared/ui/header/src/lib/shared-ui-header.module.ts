import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header.component'
import { SharedUiIconModule } from '@xact-checkout/shared/ui/icon'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    SharedUiIconModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class SharedUiHeaderModule {
}
