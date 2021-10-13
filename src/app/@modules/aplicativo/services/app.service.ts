import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getLogs = (): Observable<any> => this.http.get<any>(`${ url }/logs`).pipe(map((res) => res.items));
}
