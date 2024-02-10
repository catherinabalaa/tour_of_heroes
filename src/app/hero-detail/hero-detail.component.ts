import { Component, Input } from '@angular/core';
import { Hero } from '../../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute, 
    private location: Location, 
    private heroService: HeroService
    ) {}
}
