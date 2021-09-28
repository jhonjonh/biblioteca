import { Routes } from '@angular/router';
import { CadastrarLivroComponent } from '.';
import { ListarLivrosComponent } from './listar';

export const LivroRoutes: Routes = [
    { 
        path:'livros',
        redirectTo: 'livros/listar'
    }, 
    { 
        path:'livros/listar',
        component: ListarLivrosComponent
    },
    {
        path: 'livros/cadastrar',
        component: CadastrarLivroComponent
    }
];