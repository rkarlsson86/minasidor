import { RouterTestingModule } from '@angular/router/testing'
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest'
import { CheckoutComponent } from './checkout.component'


describe('CheckoutComponent', () => {
  let spectator: Spectator<CheckoutComponent>

  const createComponent = createComponentFactory({
    component: CheckoutComponent,
    imports: [RouterTestingModule],
    shallow: true,
  })

  beforeEach(() => (spectator = createComponent()))

  it('should create', () => {
    expect(spectator.component).toBeTruthy()
  })
})
