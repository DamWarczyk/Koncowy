import { Component, OnInit } from '@angular/core';
import {NgStyle} from "@angular/common";


@Component({
  selector: 'app-strona-glowna',
  templateUrl: './strona-glowna.component.html',
  styleUrls: ['./strona-glowna.component.css']
})
export class StronaGlownaComponent implements OnInit {

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  photo = '../../assets/images/goldering2.png';
}

