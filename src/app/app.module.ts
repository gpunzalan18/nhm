import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, EventsComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
