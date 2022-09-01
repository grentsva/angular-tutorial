import { Component, OnInit } from '@angular/core'
import { IProduct } from '../../models/product'
import { ProductsService } from '../../services/products.service'
import { Observable, tap } from 'rxjs'
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  isLoading: boolean = false
  products$: Observable<IProduct[]>
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
