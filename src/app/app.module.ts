import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapChartComponent } from './map-chart/map-chart.component';
import { RadialChartComponent } from './radial-chart/radial-chart.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { SharedDataService } from './service/share-data';
import { RiverGraphComponent } from './river-graph/river-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    MapChartComponent,
    RadialChartComponent,
    RiverGraphComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  providers: [
    SharedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
