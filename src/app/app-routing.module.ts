import { ChildComponent } from './Main Components Portal/child/child.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDefaultComponent } from './Admin Portal/admin-default/admin-default.component';
import { CreateProductComponent } from './Admin Portal/AdminComponents/create-product/create-product.component';
import { DashBoardComponent } from './Admin Portal/AdminComponents/dash-board/dash-board.component';
import { UserListComponent } from './Admin Portal/AdminComponents/user-list/user-list.component';
import { AngularConceptsComponent } from './Main Components Portal/angular-concepts/angular-concepts.component';
import { ParentComponent } from './Main Components Portal/parent/parent.component';
import { ProductsComponent } from './Main Components Portal/products/products.component';
import { ViewCartComponent } from './Main Components Portal/cart/view-cart.component';
import { UserSignInComponent } from './Management Portal/UserManagement/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './Management Portal/UserManagement/user-sign-up/user-sign-up.component';
import { HomeComponent } from './Main Components Portal/home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'products', component:ProductsComponent },
  { path:'view-cart', component:ViewCartComponent },
  { path:'user-sign-in', component:UserSignInComponent },
  { path:'user-sign-up', component:UserSignUpComponent },
  { path:'angular-components', component:AngularConceptsComponent },
  { path:'parent', component:ParentComponent },
  { path:'child', component:ChildComponent },
  {path:'gallary', component:GallaryComponent},
  {path:'faq', component:FaqComponent},
  

  {
    path:'admin-portal',component:AdminDefaultComponent,
    children: [
      {path:'', component:DashBoardComponent},
      {path:'dashboard',component:DashBoardComponent},
      {path:'user-list',component:UserListComponent},
      {path:'create-product',component:CreateProductComponent}

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
