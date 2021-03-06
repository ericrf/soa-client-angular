import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aluno } from './domain/aluno';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class AlunoService {

  baseURL: string = 'http://localhost:8080/alunos/';
  constructor(private http: HttpClient) {
  }

  buscarTodos(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.baseURL);
  }

  buscarPor(matricula: number): Observable<Aluno>{
    return this.http.get<Aluno>(this.baseURL + matricula);
  }

  salvar(aluno: Aluno): Observable<Aluno>{
    return this.http.put<Aluno>(this.baseURL, aluno, httpOptions).pipe(
      tap(_ => this.log(`persiste aluno matricula=${aluno.matricula}`)),
      catchError(this.handleError<any>('salvarAluno'))
    );
  }

  deletar(aluno: Aluno){
    return this.http.delete<Aluno>(this.baseURL + aluno.matricula).pipe(
      tap(_ => this.log(`deleta aluno matricula=${aluno.matricula}`)),
      catchError(this.handleError<any>('deletarAluno'))
    );
  }

  log(m:any){
    console.log(m);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
