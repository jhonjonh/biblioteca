import { Component, OnInit } from '@angular/core';
import { LivrosService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  livros :Livro[]; //vem do model Livro

  constructor(private livroService :LivrosService) { }

  ngOnInit() {
    this.livros = this.listarTodos();
    this.livros = [
      new Livro (1,'Réri Poti', 'Jotacá Rouling', 2014, 'Abriu' )
    ]
  }

  listarTodos() :Livro[] {
    return this.livroService.listarTodos();
  }

}
