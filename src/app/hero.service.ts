import {Injectable} from '@angular/core';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes: Hero[] = [];

  constructor() {
  }

  save(hero: Hero) {
    this.heroes.push(hero);
  }

  list() {
    return this.heroes;
  }
}
