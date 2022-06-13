import { Component, OnInit } from '@angular/core';
import {Item} from "../interface/item";
import {HttpServiceService} from "../servis/http-service.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }

  public listItems: Item[] = [];

  ngOnInit(): void {
  this.getItem()
  }

  getItem(){
    this.httpService.getItems().subscribe(
      (data: Item []) =>{ this.listItems = data}
    )
  }

  // sortItemsByPrice(){
  //   for (let i=0; i< this.listItems.length; i++){
  //     if (this.listItems[i].cena < this.listItems[i+1].cena){
  //       this.listItems.push();
  //     }
  //   }
  // }

}
