import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from './layout/main/layout.component'
import { RouterModule } from '@angular/router'
import { xactCheckoutShellRoutes } from './web-shell.routes'
import { SharedUiHeaderModule } from '@xact-checkout/shared/ui/header'
import { SharedUiFooterModule } from '@xact-checkout/shared/ui/footer'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(xactCheckoutShellRoutes),
    SharedUiHeaderModule,
    SharedUiFooterModule,
  ],
  declarations: [LayoutComponent],
})
export class WebShellModule {
}
