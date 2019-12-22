-- two way binding : 
-- add 
  import { FormsModule } from '@angular/forms'; to module
  imports:      [ BrowserModule, FormsModule ],
-- template reference variable #template-name === id in html


--------------------
Routing
--------------------
1. add components for each link (route)
2. routes:
   www.site.co.il/**news/sport**
   www.site.co.il/**news/politics**
   www.site.co.il/**news/contact-us**
   www.site.co.il/**users**         - all users
   www.site.co.il/**users/2401**    - one user id = 2401
3. **our routing map**:
   -----------------------------------------------
   route                         component to show
   -----------------------------------------------
   localhost:4200/home        -> HomeComponent
   localhost:4200/products    -> ProductsComponent
   localhost:4200/about       -> AboutComponent
   localhost:4200/Help        -> HelpComponent
   -----------------------------------------------
https://angular.io/start/routing
https://angular.io/guide/router
4. define the outlet in layout->main
    <router-outlet></router-outlet> the router injection point
    import @angular/router
5. define the roting map
6. add @angular/router
7. add import to app.module.ts : import { RouterModule , Routes} from '@angular/router'
8. add the router module to :   imports:[ BrowserModule, FormsModule, RouterModule.forRoot( )],
9. app.routing.component.ts
10. create the map:
const routes : Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'products', component: ProductsComponent },
   { path: 'about', component: AboutComponent },
   { path: 'help', component: HelpComponent },
]
11. try it manually: localhost:4200/home localhost:4200/about ext.
12. try to use regular links : not working!!!!!!!! shows #
13. change href to : href="home" href="about ext. 
14. use marquee in header component to show the reloading problem
15. change href with routerLink !!!!!!! reloding solved not requesting the server
16. use routerLinkActive

