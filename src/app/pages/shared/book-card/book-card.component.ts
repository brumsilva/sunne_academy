import { Component, Inject, inject, OnInit } from '@angular/core';
import { LivroService } from 'src/services/livro.service';
import { Livro } from 'src/livro';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.sass']
})


export class BookCardComponent implements OnInit {

  config: any;
  livros!: Livro[];
  isModal: boolean = false;
  idLivroParaExcluir!: any
  collection = { count: 20, livros: this.livros }

  constructor(
    private service: LivroService,
    private router: Router){

      this.config = {
        itemsPerPage: 8,
        currentPage: 1,
        totalItem: this.collection.count
      }
    }

    ngOnInit(): void {
      this.listarLivros()
    }

    listarLivros(){
      this.service.listar().subscribe(resultado => {
        console.log(resultado)
        this.livros = resultado
      })
    }

    confirmarAcao(id: any){
      this.idLivroParaExcluir = id
      this.service.deletar(this.idLivroParaExcluir).subscribe( {
        next:(resultado) => {console.log(resultado)
        this.listarLivros()},
        error:(erro) => console.log(erro),
        complete: () => {console.log('complete'), this.isModal = false}
      })
    }

    editar(id:any){
      this.router.navigate(['edit/'+ id])
    }

    pageChanged(event: Event) {
      this.config.currentPage = event;
    }

}
