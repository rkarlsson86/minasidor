import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { WaitingAuthorizationComponent } from './waiting-authorization.component'
import { SharedUiIconModule } from '@xact-checkout/shared/ui/icon'

@NgModule({
  imports: [
    CommonModule,
    SharedUiIconModule
  ],
  declarations: [
    WaitingAuthorizationComponent
  ],
})
export class SharedUiWaitingAuthorizationModule {}
