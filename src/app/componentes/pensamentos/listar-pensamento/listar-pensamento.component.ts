import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Lorem ipsum dolor sit amet',
      autoria: 'Carlos',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet ',
      autoria: 'Maria',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      autoria: 'Juarez',
      modelo: 'modelo1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
