import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTheMealDBService {

  private urlBaseApi: string = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  // getAll():Observable<any>{
  //   return this.http.get(`${this.urlBaseApi}/`);
  // }
  // Busca todas las comidas en base a una categoria
  getMealByCategory(category: string): Observable<any>{
    return this.http.get(`${this.urlBaseApi}/filter.php?c=${category}`);
  }
  // busca solo una comida
  getOnlyOneMeal(comida: string): Observable<any>{
    return this.http.get(`${this.urlBaseApi}/search.php?s=${comida}`)
  }
}
