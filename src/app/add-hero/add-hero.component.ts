import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  @Output() heroCreated = new EventEmitter<{ heroName: string, heroEmail: string }>();

  newName: string;
  newEmail: string;

  constructor() { }

  ngOnInit(): void {
  }

  onAddHero() {
    this.heroCreated.emit({ heroName: this.newName, heroEmail: this.newEmail })

    // debug code
    console.log(`onaddHero(): ${this.newName} and ${this.newEmail}`);

  }

  onCancelHero() {
    this.newName = '';
    this.newEmail = '';
  }

}
