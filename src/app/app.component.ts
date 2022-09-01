import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/product'
import { ProductsService } from './services/products.service'
import { Observable, tap } from 'rxjs'
import { ModalService } from './services/modal.service'

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

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.isLoading = true
    this.productsService.getAll().subscribe(() => {
      this.isLoading = false
    })
  }
}
