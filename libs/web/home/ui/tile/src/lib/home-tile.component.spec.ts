import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { HomeTileComponent } from './home-tile.component'


describe('HomeTileComponent', () => {
  let spectator: Spectator<HomeTileComponent>;

  const createComponent = createComponentFactory({
    component: HomeTileComponent,
    imports: [RouterTestingModule],
    shallow: true
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
