import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../servicios/products.service';
import { products } from '../models/dto/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public prod!: products[];
  ngOnInit(): void {
    this.obtenerProductos();
  }

  constructor(private productos: ProductsService) {}

  obtenerProductos() {
    this.productos.obtenerProductos().subscribe((response) => {
      this.prod = response;
      console.log(this.prod);
    });
  }
}
