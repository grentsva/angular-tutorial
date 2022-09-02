import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ProductsService } from '../../services/products.service'
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private modalService: ModalService
  ) {}

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    price: new FormControl<number>(0, [Validators.required]),
    description: new FormControl<string>('', [])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  get price() {
    return this.form.controls.price as FormControl
  }

  get description() {
    return this.form.controls.description as FormControl
  }

  ngOnInit(): void {}

  submit() {
    this.productService
      .create({
        title: this.form.value.title as string,
        price: this.form.value.price as number,
        description: this.form.value.description as string,
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 42,
          count: 1
        }
      })
      .subscribe(() => {
        this.modalService.close()
      })
  }
}
