import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Aluno } from '../domain/aluno';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlunoService } from '../aluno.service';
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
    private service: AlunoService,
    private location: Location) {
    this.zeraAluno();
  }

  ngOnInit() {
    this.route.params.subscribe(params => { this.getAluno() })
  }

  getAluno() {
    this.zeraAluno();
    const matricula = +this.route.snapshot.paramMap.get('matricula');
    if (!isNaN(matricula) && matricula > 0)
      this.service.buscarPor(matricula).subscribe(aluno => this.aluno = aluno); 
  }

  salvar() {
    this.service.salvar(this.aluno).subscribe(aluno => this.aluno = aluno);
  }

  remover() {
    this.service.deletar(this.aluno).subscribe(() => this.aluno= new Aluno());
  }

  zeraAluno() {
   this.aluno = new Aluno();
  }

  onSubmit(){
    this.salvar();
  }
}
