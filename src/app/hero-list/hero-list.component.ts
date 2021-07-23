import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/heroes.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroList: Hero[];

  constructor() { }

  ngOnInit(): void {
  }

  onAddHero() {
    //this.heroList.push({ name: this.name, email: this.email });

    // debug code
    //console.log(this.heroList);

  }

  onCancelHero() {
    //this.name = '';
    //this.email = '';
  }
}
