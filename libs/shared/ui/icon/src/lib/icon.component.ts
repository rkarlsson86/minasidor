import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { UiIcon } from './enums'
import { BehaviorSubject, Observable } from 'rxjs'

@Component({
  selector: 'xact-checkout-icon',
  templateUrl: './icon.component.html',
  styles: [
    `
        :host {
            display: block;
        }

        .animate {
            animation: rotate 2s linear infinite;
        } 
        .animate.path {
            animation: dash 1.5s ease-in-out infinite;
        }


        @keyframes rotate {
            100% {
                transform: rotate(360deg);
            }
        }

        @keyframes dash {
            0% {
                stroke-dasharray: 1, 150;
                stroke-dashoffset: 0;
            }
            50% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -35;
            }
            100% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -124;
            }
        }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() icon!: UiIcon | string
  @Input() size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'md'
  @Input() animate$: Observable<boolean> = new Observable<boolean>();
}
