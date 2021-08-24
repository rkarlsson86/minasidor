import { Component, ChangeDetectionStrategy } from '@angular/core'
import { UiStore } from '@xact-checkout/shared/data-access/ui-store'

@Component({
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  vm$ = this.service.vm$

  constructor(
    private readonly service: UiStore,
  ) {
  }

}
