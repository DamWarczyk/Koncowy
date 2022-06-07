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

}
