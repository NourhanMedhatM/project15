import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project13';



  carditemcount!: number;


  constructor(private cardservice: CardService) {

  }
  ngOnInit(): void {
    this.cardservice.realcardcount.subscribe((count) => { this.carditemcount = count });
  }


}
