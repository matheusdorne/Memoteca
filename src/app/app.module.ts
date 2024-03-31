import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

@NgModule({
  declarations: [
    AppComponent, 
    CabecalhoComponent, RodapeComponent, CriarPensamentoComponent, ListarPensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule // Importando o módulo de formulários
  ],
  providers: [],
  bootstrap: [AppComponent] // Primeiro componete renderizado na aplicação
})
export class AppModule { }
