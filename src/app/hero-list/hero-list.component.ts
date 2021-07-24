import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../heroes/heroes.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Input() heroElement: Hero;

  constructor() { }

  ngOnInit(): void {
  }
}
