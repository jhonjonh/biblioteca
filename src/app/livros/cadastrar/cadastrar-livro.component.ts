import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LivrosService, Livro } from '../shared';

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.css']
})
export class CadastrarLivroComponent implements OnInit {
  @ViewChild ('formLivro', {static:true}) formLivro :NgForm;
  livro : Livro;

  constructor( private livroService: LivrosService, private router :Router) { }

  ngOnInit() {
    this.livro = new Livro();
  }

  cadastrar() :void{
    if(this.formLivro.form.valid){
      this.livroService.cadastrar(this.livro);
      this.router.navigate(["/livros"]);
    }
  }

}
