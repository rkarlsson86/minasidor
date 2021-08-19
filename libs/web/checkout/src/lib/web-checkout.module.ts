import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component'
import { SharedUiIconModule } from '@xact-checkout/shared/ui/icon'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    SharedUiIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckoutComponent,
      },
    ]),
  ],
  declarations: [
    CheckoutComponent
  ],
})
export class WebCheckoutModule {}
