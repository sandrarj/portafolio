import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { DocsComponent } from './components/docs/docs.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductoComponent } from './components/producto/producto.component';
import { InfomationService } from './services/infomation.service';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    DocsComponent,
    ContactComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ 
    InfomationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
