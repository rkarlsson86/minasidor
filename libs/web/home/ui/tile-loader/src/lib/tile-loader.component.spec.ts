import { RouterTestingModule } from '@angular/router/testing'
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest'
import { TileLoaderComponent } from './tile-loader.component'


describe('TileLoaderComponent', () => {
  let spectator: Spectator<TileLoaderComponent>

  const createComponent = createComponentFactory({
    component: TileLoaderComponent,
    imports: [RouterTestingModule],
    shallow: true,
  })

  beforeEach(() => (spectator = createComponent()))

  it('should create', () => {
    expect(spectator.component).toBeTruthy()
  })
})
