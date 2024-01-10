import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Products } from '../products';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCartComponent implements OnInit {


  
  productscard! : Products[];


  constructor (

    private cardservice:CardService,
  ){}
  ngOnInit(): void {
  

    this.productscard =   this.cardservice.getcarditem();


  }

  remove(id:number){

    this.cardservice.removeitem(id);
  }

}
