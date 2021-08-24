import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconComponent } from './icon.component'
import { SvgIconRegistry, SvgIconsModule } from '@ngneat/svg-icon'
import { uiIconMap } from './constants/ui-icon-map'

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forRoot()
  ],
  declarations: [
    IconComponent
  ],
  exports: [IconComponent]
})
export class SharedUiIconModule {
  constructor(readonly registry: SvgIconRegistry) {
    uiIconMap.forEach((data, name) => this.registry.register({ name, data }));
  }
}
