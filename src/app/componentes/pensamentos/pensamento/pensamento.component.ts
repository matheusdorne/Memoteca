import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit { 

  @Input() pensamento = { // @Input() é um decorator que permite que o componente receba dados de outro componente
    conteudo: 'A vida é bela', 
    autoria: 'Desconhecido', 
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
