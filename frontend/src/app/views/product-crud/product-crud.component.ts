import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {
  constructor(private router: Router){}
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
