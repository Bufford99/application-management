import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatButtonModule, MatTableModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AsListPipe } from './pipes/as-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    DetailComponent,
    
    AsListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // angular materials
    MatButtonModule,
    MatTableModule,
    MatSortModule,

    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
