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

  open({ title, subtitle, accountId }: { title: string, subtitle: string, accountId: string }) {
    this.dialogRef = this.dialog.open(WaitingAuthorizationComponent, {
      closeButton: false,
      enableClose: false,
      size: 'fullScreen',
      data: {
        title,
        subtitle,
        accountId,
      },
    })
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close()
      this.dialogRef = null
    }
  }

}
