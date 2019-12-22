import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule , routes} from '@angular/roter'
//import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, HomeComponent, ProductsComponent, AboutComponent, HelpComponent ],
  bootstrap:    [LayoutComponent]
})
export class AppModule { }
