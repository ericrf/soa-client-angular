import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Aluno } from '../domain/aluno';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { empty } from 'rxjs/Observer';


@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlunoFormularioComponent implements OnInit {

  @Input() aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) {
      this.aluno = {
        matricula: 0,
        cpf:0,
        nome:"",
        idade:0,
        enderecos:[
          {
            id:0,
            logradouro:"",
            numero:0,
            complemento:"",
            bairro:"",
            cep:0,
            cidade:"",
            estado:""
          }
        ]
      }
  }

  ngOnInit() {
    this.getAluno();
  }

  getAluno() {
    const matricula = +this.route.snapshot.paramMap.get('matricula');
    if (!isNaN(matricula))
      this.heroService.getAluno(matricula).subscribe(aluno => this.aluno = aluno);
  }

  salvar() {
    this.heroService.salvarAluno(this.aluno).subscribe();
  }

  remover(){
    this.heroService.deletarAluno(this.aluno).subscribe();
  }
}
