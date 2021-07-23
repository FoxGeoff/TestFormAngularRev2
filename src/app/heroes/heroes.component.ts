export interface Hero {
  name: string;
  email: string;
}

const heroesData: Hero[] = [
  { name: 'Geoff', email: "geoff@server.com" },
  { name: 'Joanna', email: "joanna@server.com" },
  { name: 'Dan', email: "dan@server.com" }
];

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  name: string;
  email: string;
  // assign test data
  heroList: Hero[] = heroesData;

  constructor() { }

  ngOnInit(): void {
  }

  onHeroAdded(heroData: { heroName: string, heroEmail: string }) {
    this.heroList.push({
      name: heroData.heroName,
      email: heroData.heroEmail
    });

    // debug code
    console.log(`onHeroAdded():`, this.heroList);

  }

}
