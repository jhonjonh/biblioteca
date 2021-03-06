import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosService } from './shared';
import { ListarLivrosComponent } from './listar/listar-livros.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarLivroComponent } from './cadastrar/cadastrar-livro.component';



@NgModule({
  declarations: [
    ListarLivrosComponent,
    CadastrarLivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    LivrosService
  ]
})

export class LivrosModule { }
