import { Product } from './../../../views/product-crud/product.model';
import { ProductService } from './../product.service';
import { Component, OnInit, NgModule } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product:Product= {
    name: '',
    price: 0,
  }
  
  constructor (private productService: ProductService,
   private router: Router ) {}
  ngOnInit(): void {
    
  }
  createProduct(): void {
    //Esperando produto como parametro 
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Create Product...')
      this.router.navigate(['/products'])
    }) //no subscribe vou receber quando resposta chegar

    
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
