import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';

const routes: Routes = [
  { path: '', redirectTo: '/alunos', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'alunos/:matricula', component: AlunoFormularioComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],

  exports: [ RouterModule ]
})
export class AppRoutingModule { }
