import { ChangeDetectionStrategy, Component } from '@angular/core'
import { UiStore } from '@xact-checkout/shared/data-access/ui-store'
import { map } from 'rxjs'

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
  navItems$ = this.service.navItems$.pipe(map((navItems) => navItems.filter((navItem) => !navItem.hideOnNavbar)))
  vm$ = this.service.vm$

  constructor(private readonly service: UiStore) {
  }

  toggleDarkMode(): void {
    this.service.toggleTheme()
  }


}
