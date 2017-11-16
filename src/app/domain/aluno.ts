import { Endereco } from './endereco';

export class Aluno {
    matricula: number = null;
    cpf: number = null;
    nome: string = null;
    idade: number = null;
    enderecos: Endereco[] = [];

    constructor(){
            this.matricula=null;
            this.cpf=null;
            this.nome = null;
            this.idade = null,
            this.enderecos[0] = new Endereco();
    }
}
