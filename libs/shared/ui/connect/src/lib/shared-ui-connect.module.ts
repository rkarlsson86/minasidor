import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ConnectComponent } from './connect.component'
import { SharedUiIconModule } from '@xact-checkout/shared/ui/icon'

@NgModule({
  imports: [
    CommonModule,
    SharedUiIconModule
  ],
  declarations: [
    ConnectComponent
  ],
})
export class SharedUiConnectModule {}
