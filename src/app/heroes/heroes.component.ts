import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 newHeroName: string;
 newEmail: string;
 heroName = 'Superman';
 heroEmail = 'super@server.com';

  constructor() { }

  ngOnInit(): void {
  }

}
