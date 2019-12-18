import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

import { HomeComponent } from './components/home/home.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, HomeComponent ],
  bootstrap:    [LayoutComponent]
})
export class AppModule { }
