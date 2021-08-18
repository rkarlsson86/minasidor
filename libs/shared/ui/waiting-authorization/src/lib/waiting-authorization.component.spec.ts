import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { WaitingAuthorizationComponent } from './waiting-authorization.component'


describe('LoadingComponent', () => {
  let spectator: Spectator<WaitingAuthorizationComponent>;

  const createComponent = createComponentFactory(WaitingAuthorizationComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

});
