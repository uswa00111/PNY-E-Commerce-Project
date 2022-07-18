import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './MainComponentsPortal/products/products.component';
import { HeaderComponent } from './MainComponentsPortal/header/header.component';
import { ViewCartComponent } from './MainComponentsPortal/cart/view-cart.component';
import { UserSignInComponent } from './ManagementPortal/UserManagement/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './ManagementPortal/UserManagement/user-sign-up/user-sign-up.component';
import { AdminSignInComponent } from './ManagementPortal/AdminManagement/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './ManagementPortal/AdminManagement/admin-sign-up/admin-sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminDefaultComponent } from './Admin Portal/admin-default/admin-default.component';
import { AdminDefaultModule } from './Admin Portal/admin-default/admin-default.module';
import { DashBoardComponent } from './Admin Portal/AdminComponents/dash-board/dash-board.component';
import { UserListComponent } from './Admin Portal/AdminComponents/user-list/user-list.component';
import { CreateProductComponent } from './Admin Portal/AdminComponents/create-product/create-product.component';
import { AngularConceptsComponent } from './MainComponentsPortal/angular-concepts/angular-concepts.component';
import { ParentComponent } from './MainComponentsPortal/parent/parent.component';
import { ChildComponent } from './MainComponentsPortal/child/child.component';
import { HomeComponent } from './MainComponentsPortal/home/home.component';
import { FooterComponent } from './MainComponentsPortal/footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    ViewCartComponent,
    UserSignInComponent,
    UserSignUpComponent,
    AdminSignInComponent,
    AdminSignUpComponent,
    AngularConceptsComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    FooterComponent,
    FaqComponent,
    GallaryComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {maxOpened:1,
      autoDismiss:true,}
    ),
    AdminDefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
