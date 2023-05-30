import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TablesBarComponent } from './tables-bar/tables-bar.component';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollerModule } from 'primeng/scroller';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PickListModule } from 'primeng/picklist';
@NgModule({
  declarations: [AppComponent, TablesBarComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    TieredMenuModule,
    CardModule,
    SidebarModule,
    MenubarModule,
    InputTextModule,
    SpeedDialModule,
    ToastModule,
    HttpClientModule,
    ScrollerModule,
    TableModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
