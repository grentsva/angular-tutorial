import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductComponent } from './components/product/product.component'
import { GlobalErrorComponent } from './components/common/global-error/global-error.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FilterProductsPipe } from './pipes/filter-products.pipe'
import { ModalComponent } from './components/modal/modal.component'
import { ProductAddComponent } from './components/product-add/product-add.component'
import { FocusDirective } from './directives/focus.directive'
import { ProductPageComponent } from './pages/product-page/product-page.component'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { NavigationComponent } from './components/navigation/navigation.component'
import { PreloaderComponent } from './components/common/preloader/preloader.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    ProductAddComponent,
    FocusDirective,
    ProductPageComponent,
    AboutPageComponent,
    NavigationComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
