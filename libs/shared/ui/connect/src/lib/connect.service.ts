import { Injectable } from '@angular/core'
import { DialogService } from '@ngneat/dialog'
import { ConnectComponent } from './connect.component'

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  dialogRef: any

  constructor(private readonly dialog: DialogService) {
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


}
