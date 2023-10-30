import { ProductService } from './../product.service';
import { Product } from './../../../views/product-crud/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action' ] // Inicialize a propriedade

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }
}