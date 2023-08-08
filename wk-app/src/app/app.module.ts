import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WineModule } from './wine/wine.module';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    CoreModule,
    SharedModule,
    WineModule,
    AppRoutingModule,
  ],
  providers: [
    appInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
