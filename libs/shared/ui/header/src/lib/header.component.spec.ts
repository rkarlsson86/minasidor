import { HeaderComponent } from './header.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>

  const createComponent = createComponentFactory({
    component: HeaderComponent,
  })

  beforeEach(() => (spectator = createComponent()))

  it('should create', () => {
    expect(spectator.component).toBeTruthy()
  })
})
