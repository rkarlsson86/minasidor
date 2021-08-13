import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { WebShellModule } from '@xact-checkout/web/shell'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    WebShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
