import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { WebShellModule } from '@xact-checkout/web/shell'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    WebShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
