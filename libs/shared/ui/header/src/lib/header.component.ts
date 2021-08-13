import { ChangeDetectionStrategy, Component } from '@angular/core'
import { UiStore } from '@xact-checkout/shared/data-access/ui-store'
import { ConnectService } from '@xact-checkout/shared/ui/connect'
import { map } from 'rxjs'
import { NavItem } from '@xact-checkout/shared/data-access/models'

@Component({
  selector: 'xact-checkout-header',
  templateUrl: './header.component.html',
  styles: [
    `
        :host {
            display: block;
        }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  navItems$ = this.service.navItems$.pipe(map((navItems: NavItem[]) => navItems.filter((navItem) => !navItem.hideOnNavbar)))
  vm$ = this.service.vm$

  constructor(private readonly service: UiStore,
              private readonly connectService: ConnectService) {
  }

  connect() {
    return this.connectService.open()
  }

  toggleDarkMode(): void {
    this.service.toggleTheme()
  }


}
