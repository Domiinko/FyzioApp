import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { ParticlesModule } from 'angular-particle';
import { NavComponent } from './nav/nav.component';
import { SmartBandInfoComponent } from './smart-band-info/smart-band-info.component';
import { SmartWatchInfoComponent } from './smart-watch-info/smart-watch-info.component';
import { SmartScaleInfoComponent } from './smart-scale-info/smart-scale-info.component';
import { SmartBarometerInfoComponent } from './smart-barometer-info/smart-barometer-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BodyComponent,
    WelcomeComponent,
    FooterComponent,
    SliderComponent,
    NavComponent,
    SmartBandInfoComponent,
    SmartWatchInfoComponent,
    SmartScaleInfoComponent,
    SmartBarometerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatGridListModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
