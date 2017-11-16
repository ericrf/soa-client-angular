import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Aluno } from '../domain/aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
  encapsulation: ViewEncapsulation.None,
  
})
export class AlunosComponent implements OnInit {

  alunos: Aluno[];
  constructor(public service:AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  }
  getAlunos(){
    this.service.buscarTodos().subscribe(alunos =>{
      this.alunos = alunos;
    });
  }

}
