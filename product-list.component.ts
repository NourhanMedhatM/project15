import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!:Products[];

  constructor(
    private proservice:ProductService,
    private cardservice :CardService
  ){}

  ngOnInit(): void {
    this.proservice.getproduct().subscribe((data:Products[])=>{this.products=data});
  }
  addtocard(product:Products){
    this.cardservice.addtocard(product) ;
    console.log(product);
  }

}
