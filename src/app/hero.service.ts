import { Injectable } from '@angular/core';
import { Hero } from '../app/domain/hero';
import { HEROES } from '../app/mock/heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aluno } from './domain/aluno';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }
  

  
}
