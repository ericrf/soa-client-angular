export class Endereco {
    id: number;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cep: number;
    cidade: string;
    estado: string;

    constructor(){
        this.id = null;
        this.logradouro = null;
        this.numero = null;
        this.complemento = null;
        this.bairro = null;
        this.cep = null;
        this.cidade = null;
        this.estado = null;
    }
}