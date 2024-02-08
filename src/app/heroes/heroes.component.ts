import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../hero.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  // hero: Hero = {
  //   id:1,
  //   name:'Windstorm'
  // };

  heroes: Hero[]=[];
  selectedHero?: Hero;

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero=hero;
  }

  getHeroes(): void {
    this.heroes=this.heroService.getHeroes();
  }
}
