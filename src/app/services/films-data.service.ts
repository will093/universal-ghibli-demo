import { Film } from '../models/film.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsDataService {

  readonly filmsEndpoint: string = 'https://ghibliapi.herokuapp.com/films';

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsEndpoint);
  }
}
