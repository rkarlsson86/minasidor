import { Injectable } from '@angular/core'
import { DialogService } from '@ngneat/dialog'
import { ConnectComponent } from './connect.component'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { AppComponent } from '../../../../../../apps/web/src/app/app.component'

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  dialogRef: any

  constructor(private readonly dialog: DialogService,
              private readonly http: HttpClient) {
  }

  open() {
    this.dialogRef = this.dialog.open(ConnectComponent, {
      closeButton: false,
      enableClose: false,
      size: 'md',
    })
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close()
      this.dialogRef = null
    }
  }

  getQrCode(): Observable<any> {
    return this.http.get<string>(`http://localhost:8080/api/v1/sdk/getQrCode/${AppComponent.socketId}`,
      {
        // @ts-ignore
        responseType: 'text'
      });
  }

}
