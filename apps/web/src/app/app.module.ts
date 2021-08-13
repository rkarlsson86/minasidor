import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { WebShellModule } from '@xact-checkout/web/shell'
import { RouterModule } from '@angular/router'
import { DialogModule } from '@ngneat/dialog'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    WebShellModule,
    DialogModule.forRoot({
      sizes: {
        sm: {
          width: '300px',
          height: '250px',
        },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
