import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  Mensagem!: String;
  Resultado: boolean = false;
  Aprovado!: boolean;
  RMA!: number;
  Nome!: String;
  Nota1!: number;
  Nota2!: number;
  Nota3!: number;
  Nota4!: number;
  ResultadoNumber!: number;
  SemNota!: boolean;

  constructor() {}

  calcularMedia(): void {
    this.ResultadoNumber =
      (this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4) / 4;

    if (this.ResultadoNumber > 6) {
      this.Resultado = true;
      this.Aprovado = true;
      this.Mensagem = `O Aluno ${this.Nome} com o RMA ${this.RMA} foi Aprovado com a nota média ${this.ResultadoNumber}`;
    } else {
      this.Resultado = true;
      this.Aprovado = false;
      this.Mensagem = `O Aluno ${this.Nome} com o RMA ${this.RMA} foi Reprovado com a nota média ${this.ResultadoNumber}`;
    }
  }
  limpar(): void {

    this.Mensagem = '',
    this.Resultado = false;

  }
}
