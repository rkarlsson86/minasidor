import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ConnectComponent } from './connect.component'


describe('LoadingComponent', () => {
  let spectator: Spectator<ConnectComponent>;

  const createComponent = createComponentFactory(ConnectComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('ref should be accessible', () => {
    expect(spectator.component.ref).toBeDefined();
  });

});
