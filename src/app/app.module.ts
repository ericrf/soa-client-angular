import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { AlunosComponent } from './alunos/alunos.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoService } from './aluno.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatMenuModule, MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule,  MatListModule, MatSidenavModule, MatFormFieldModule, MatStepperModule, MatInputModule} from '@angular/material';
import { CpfPipe } from './cpf.pipe';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    AlunosComponent,
    DashboardComponent,
    AlunoFormularioComponent,
    CpfPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule
  ],
  providers: [HeroService, AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
