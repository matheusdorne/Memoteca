import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit { 
  // @Input() é um decorator que permite que o componente receba dados de outro componente
  @Input() pensamento: Pensamento = {  
    id: 0, 
    conteudo: '', 
    autoria: '', 
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {
  } 

  larguraPensamento(): string { 
    if(this.pensamento.conteudo.length >= 256) { 
      return 'pensamento-g'
    } 
    return 'pensamento-p'
  }

}
