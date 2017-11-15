import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Aluno } from '../domain/aluno';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlunosComponent implements OnInit {

  alunos: Aluno[];
  constructor(public heroService:HeroService) { }

  ngOnInit() {
    this.getAlunos();
  }
  getAlunos(){
    this.heroService.getAlunos().subscribe(alunos =>{
      this.alunos = alunos;
    });
  }

}
