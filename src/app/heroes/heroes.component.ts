import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../domain/hero';
import { HEROES } from '../mock/heroes';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {
  
  heroes:Hero[];
  hero:Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero:Hero){
    this.hero = hero;
  }

}
