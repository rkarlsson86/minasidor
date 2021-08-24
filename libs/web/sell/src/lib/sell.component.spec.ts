import { RouterTestingModule } from '@angular/router/testing'
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest'
import { SellComponent } from './sell.component'


describe('SellComponent', () => {
  let spectator: Spectator<SellComponent>

  const createComponent = createComponentFactory({
    component: SellComponent,
    imports: [RouterTestingModule],
    shallow: true,
  })

  beforeEach(() => (spectator = createComponent()))

  it('should create', () => {
    expect(spectator.component).toBeTruthy()
  })
})
