import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//Importando minha Interface
//import { QueryBuilder } from '../app/_util/pagination';
import { Livro } from 'src/livro';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class LivroService {

 private readonly api = 'http://localhost:3000/Livros';

 constructor(private http: HttpClient) { }

 listar():Observable<any> {
   return this.http.get<any>(this.api)
 }

 deletar(id:any) {
   return this.http.delete(this.api + '/' + id)
  }

 add(livro: Livro) {
   return this.http.post(this.api, livro)

 }

 getID(id:any) {
   return this.http.get(this.api + '/' + id)
 }

 editForm(id:any, livro: Livro) {
   return this.http.put(this.api + '/' + id, livro)
  }
}

