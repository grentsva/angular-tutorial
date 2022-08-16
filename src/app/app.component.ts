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
  isLoading: boolean = false
  products$: Observable<IProduct[]>
  title: string = 'Products'
  term: string = ''

  constructor(private productsService: ProductsService) {   
  }

  ngOnInit(): void {
    this.isLoading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.isLoading = false)
    )
  }
}
