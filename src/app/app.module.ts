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
import { ProductService } from './services/product.service';

// 1. http
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component'


const routes : Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'products', component: ProductsComponent },
   { path: 'product-details/:id', component: ProductDetailsComponent },
   { path: 'add-product', component: AddProductComponent },
   { path: 'about', component: AboutComponent },
   { path: 'help', component: HelpComponent },
   { path: '', redirectTo: '/home',  pathMatch: 'full' },
   { path: '**', component: PageNotFoundComponent }
]

// 2 .add to imports
@NgModule({                              
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot( routes ) , HttpClientModule],
  declarations: [ LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, HomeComponent, ProductsComponent, AboutComponent, HelpComponent, PageNotFoundComponent, ThumbnailComponent, ProductDetailsComponent, AddProductComponent ],
  bootstrap:    [LayoutComponent],
  providers: [ProductService]
})
export class AppModule { }
