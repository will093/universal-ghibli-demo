import { Component, OnInit } from '@angular/core';

import { Film } from './models/film.model';
import { FilmsDataService } from './services/films-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'universal-ghibli-demo';

  films$: Observable<Film[]>;

  constructor(private filmsDataService: FilmsDataService) {}

  ngOnInit() {
    this.films$ = this.filmsDataService.getFilms().pipe(
      map(f => f.sort((f1, f2) => parseInt(f1.rt_score) > parseInt(f2.rt_score) ? -1 : 1))
    );
  }

}
