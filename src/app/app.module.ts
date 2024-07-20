import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgChartjsModule } from 'ng-chartjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataUsageDashboardComponent } from './components/data-usage-dashboard/data-usage-dashboard.component';




@NgModule({
  declarations: [
    
    AppComponent,
         DataUsageDashboardComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgChartjsModule,
    BrowserAnimationsModule,
    NgxChartsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
