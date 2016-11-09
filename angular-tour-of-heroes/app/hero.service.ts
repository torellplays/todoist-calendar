import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService {

	getHeroes(): Promise<Hero[]> {
    return Promise.resolve(Hero[]); /** it should be (HEROES), but error says it cant find it **/
}
	getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}
}
