import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes} from '@angular/router'
//import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { ProductsService } from './services/product.service';


const routes : Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'products', component: ProductsComponent },
   { path: 'about', component: AboutComponent },
   { path: 'help', component: HelpComponent },
   { path: '', redirectTo: '/home',  pathMatch: 'full' },
   { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot( routes ) ],
  declarations: [ LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, HomeComponent, ProductsComponent, AboutComponent, HelpComponent, PageNotFoundComponent, ThumbnailComponent ],
  bootstrap:    [LayoutComponent],
  providers: [ProductService]
})
export class AppModule { }
