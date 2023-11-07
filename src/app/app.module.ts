import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ThemeComponent } from './modules/theme/theme.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { NavbarComponent } from './modules/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ThemeComponent,
    AboutusComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
