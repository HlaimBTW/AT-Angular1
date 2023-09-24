import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products = products;

  constructor(
    private route: ActivatedRoute,

  ) {}

  ngOnInit() {
    
  }

  addToCart(product: Product) {
    window.alert(`${product.name} has been added to the cart.`);
  }
}
