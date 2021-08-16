import { Component, ChangeDetectionStrategy } from '@angular/core'
import { UserStore } from '@xact-checkout/shared/data-access/user-store'
import { ConnectService } from '@xact-checkout/shared/ui/connect'

@Component({
  selector: 'xact-checkout-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  vm$ = this.userStore.vm$

  constructor(private readonly userStore: UserStore,
              private readonly connectService: ConnectService) {
  }

  connect() {
    return this.connectService.open()
  }

}
