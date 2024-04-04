import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamentos';
import { Observable } from 'rxjs';

//Injectable = decorator que permite que uma classe seja injetada em outra classe
@Injectable({
  providedIn: 'root' // root = serviço disponovel em toda a aplicação
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos' 

  constructor(private http: HttpClient) { }  

  listar(): Observable<Pensamento[]> { 
    return this.http.get<Pensamento[]>(this.API)
  } 

  criar(pensamento: Pensamento): Observable<Pensamento> { 
    return this.http.post<Pensamento>(this.API, pensamento)
  } 

  excluir(id: number): Observable<void> { 
    const url = `${this.API}/${id}`
    return this.http.delete<void>(url)
  } 

  buscarPorId(id: number): Observable<Pensamento> { 
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }


}
