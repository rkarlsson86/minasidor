import { Injectable } from '@angular/core'
import { DialogService } from '@ngneat/dialog'
import { ConnectComponent } from './connect.component'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Socket } from 'ngx-socket-io'
import { RequestValidation, SellNFTDto, UserAccount } from '@xact-wallet-sdk/client'
import { environment } from '@xact-checkout/root/environments'

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  dialogRef: any
  socketId!: string

  constructor(private readonly dialog: DialogService,
              private readonly socket: Socket,
              private readonly http: HttpClient) {
    this.connectSocket()
  }

  open() {
    this.dialogRef = this.dialog.open(ConnectComponent, {
      closeButton: false,
      enableClose: false,
      size: 'fullScreen',
    })
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close()
      this.dialogRef = null
    }
  }

  connectSocket() {
    this.socket.connect()
    this.socket.on('xactCheckout.connexion', (socketId: string) => {
      this.socketId = socketId
    })
  }

  getQrCode(): Observable<any> {
    return this.http.get<string>(`${environment.API}/sdk/getQrCode/${this.socketId}`,
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        responseType: 'text',
      })
  }

  listenForAuth(): Observable<RequestValidation<UserAccount>> {
    return new Observable(observer => {
      this.socket.on('xactCheckout.auth', (user: RequestValidation<UserAccount>) => {
        this.socket.disconnect()
        observer.next(user)
      })
    })
  }

  sellNFT({ fromAccountId, hbarAmount, quantity, nft }: SellNFTDto): Promise<string | undefined> {
    return this.http.post<string>(`${environment.API}/sdk/sell-nft`, {
      fromAccountId,
      hbarAmount,
      quantity,
      nft,
      socketId: this.socketId,
    }).toPromise()
  }

}
