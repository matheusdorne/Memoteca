import { Pensamento } from './../pensamentos';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) //Importa os métodos criados no pensamento.service.ts
  { }

  //ngOnInit = método que é chamado quando o componente é inicializado
  ngOnInit(): void { 
    //Subscribe = método que recebe um observable e executa uma função quando o observable é resolvido
  

  this.service.listar().subscribe((listaPensamentos) => {
             this.listaPensamentos = listaPensamentos

         });
  }

}
