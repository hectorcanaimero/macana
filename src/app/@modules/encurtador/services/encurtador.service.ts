import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Urls } from '@modules/encurtador/interfaces/urls';
import { environment } from 'src/environments/environment';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class EncurtadorService {

  items$: Observable<Urls> | [];

  constructor(private http: HttpClient) { }

  getUrls = (): Observable<any> => {
    return this.http.get<any>(`${url}/url`).pipe(map(res => res.items))
  }

  createUrl = (data: Urls): Observable<Urls> => this.http.post<Urls>(`${url}/url`, data);
  updateUrl = (id: string, data: Urls): Observable<Urls> => this.http.put<Urls>(`${url}/url/${id}`, data);

  removeUrl = (shorty: string) => this.http.delete(`${url}/url/${shorty}`);
}
