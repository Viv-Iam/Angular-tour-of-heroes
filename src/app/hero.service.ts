import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } form './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
  return HEROES;
  }
}
