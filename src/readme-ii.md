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
