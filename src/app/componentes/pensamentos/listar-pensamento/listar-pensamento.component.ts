import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit { 

  listaPensamentos = [
    { 
      conteudo: 'A vida é bela', 
      autoria: 'Carlos', 
      modelo: 'modelo3'
    },
    { 
      conteudo: 'Tenha coragem', 
      autoria: 'Maria', 
      modelo: 'modelo2'
    },
    { 
      conteudo: 'valorize a vida', 
      autoria: 'Juarez', 
      modelo: 'modelo1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
