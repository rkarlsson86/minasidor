import { Component } from '@angular/core'
import { Socket } from 'ngx-socket-io'

@Component({
  selector: 'xact-checkout-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  static socketId: string

  constructor(private readonly socket: Socket) {
    this.socket.connect()
    this.socket.on('app.connexion', (socketId: string) => {
      console.log('socketId', socketId)
      AppComponent.socketId = socketId
    });
  }
}
