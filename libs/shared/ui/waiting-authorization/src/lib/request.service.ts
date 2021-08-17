import { Injectable } from '@angular/core'
import { DialogService } from '@ngneat/dialog'
import { WaitingAuthorizationComponent } from './waiting-authorization.component'

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  dialogRef: any
  socketId!: string

  constructor(private readonly dialog: DialogService) {
  }

  open() {
    this.dialogRef = this.dialog.open(WaitingAuthorizationComponent, {
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

}
