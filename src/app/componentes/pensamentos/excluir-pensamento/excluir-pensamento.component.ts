import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = { 
    id: 0, 
    conteudo: '', 
    autoria: '', 
    modelo: ''
  }
  constructor(
    private service: PensamentoService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void { 

    const id = this.route.snapshot.paramMap.get('id') //Pega o id da rota 
    this.service.buscarPorId(Number(id)).subscribe((pensamento) => { 
      this.pensamento = pensamento
    }) 

    //Number(id) = converte o id para number 
    //=> = arrow function = função anônima
  }  

  excluirPensamento(){  
    if(this.pensamento.id) {  

      this.service.excluir(this.pensamento.id).subscribe(() => { 
        this.router.navigate(['/listarPensamento'])
      }) 

      return
    }
  } 

  cancelarPensamento() {  
    this.router.navigate(['/listarPensamento'])
  }


}
