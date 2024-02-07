import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Hero = {
    id:1,
    name:'Windstorm'
  };

  heroes=HEROES;
}
