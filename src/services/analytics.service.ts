import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Analytics } from '../analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private readonly api = 'http://localhost:3007/data';

  constructor(private http: HttpClient) { }

  listar():Observable<any> {
    return this.http.get<any>(this.api)
  }
}
