import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'simulator-header',
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

  constructor() {
  }


}
