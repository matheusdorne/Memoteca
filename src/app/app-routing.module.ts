import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
{
  path: '', 
  redirectTo: 'listarPensamento', // Tela inicial vai redirecionar para a listagem de pensamentos 
  pathMatch: 'full' // A rota deve ser exatamente igual a definida em path 
  //full = a rota deve ser exatamente igual a definida em path 
  //prefix = a rota deve começar com o valor definido em path
},
{
  path: 'criarPensamento', 
  component: CriarPensamentoComponent 
},
{
  path: 'listarPensamento', 
  component: ListarPensamentoComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
