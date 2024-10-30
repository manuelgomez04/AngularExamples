import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsResponse } from '../models/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }
  getFilms(): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>('https://swapi.dev/api/films/');
  }
}
