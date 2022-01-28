import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  Login():Observable<any>{
    return this.http.get<any>('http://localhost:3003/Adm')
  }
}

export interface Adm {
  email: string;
  password: string;
}



