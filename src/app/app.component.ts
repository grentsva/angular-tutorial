import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Products'
  //products: IProduct[] = []
  isLoading: boolean = false
  products$: Observable<IProduct[]>

  constructor(private productsService: ProductsService) {   
  }

  ngOnInit(): void {
    this.isLoading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.isLoading = false)
    )
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products
    //   this.isLoading = false
    // })
  }
}
