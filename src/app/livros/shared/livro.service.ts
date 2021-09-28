import { Injectable } from '@angular/core';
import { Livro } from './';

@Injectable()

export class LivrosService {

  constructor() { }

  listarTodos() :Livro[] {
    const livros = localStorage['livros'];
    return livros ? JSON.parse(livros) : []; /* Operador Terneiro */ 
  }

  cadastrar(livro :Livro) :void {
    const livros = this.listarTodos();
    livro.id = new Date().getTime();
    livros.push(livro);
    localStorage['livros'] = JSON.stringify(livros);
  }

  buscarPorId(id :number) :Livro {
    const livros :Livro[] = this.listarTodos();
    return livros.find(livro => livro.id === id);
  }

  atualizar(livro: Livro) :void {
    const livros :Livro[] = this.listarTodos(); 
    livros.forEach((obj, index, objs)=> {
      if ( livro.id === obj.id) {
        objs[index] = livro;
      }
    });
    localStorage['livros'] = JSON.stringify(livros);
  }

  remover(id: number) :void {
    let livros :Livro[] = this.listarTodos();
    livros = livros.filter(livros => livros.id !== id);
    localStorage['livros'] = JSON.stringify(livros);
  }

}
