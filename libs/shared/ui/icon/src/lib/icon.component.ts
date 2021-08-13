import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UiIcon } from './enums';

@Component({
  selector: 'xact-checkout-icon',
  templateUrl: './icon.component.html',
  styles: [
    `
        :host {
            display: block;
        }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() icon!: UiIcon | string;
  @Input() size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'md';
}
