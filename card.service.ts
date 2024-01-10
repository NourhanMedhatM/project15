import { Injectable } from '@angular/core';
import { Products } from './products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  carditem:Products[]=[];
  private carditemcount = new BehaviorSubject<number>(0);
  realcardcount = this.carditemcount.asObservable();

  constructor() { }
  addtocard(product:Products){
    this.carditem.push(product);
    this.carditemcount.next(this.carditem.length);

  }
  getcarditem():Products[]
  {
    return this.carditem;
  }
  removeitem(id:number)
  {
    const index=this.carditem.findIndex((item=>item.id===id));
    this.carditem.splice(index,1);
    this.carditemcount.next(this.carditem.length);

  }
}
