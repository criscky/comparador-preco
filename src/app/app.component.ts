import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dados: any[] = [];
  dadosFiltrados: any[] = [];
  filtro: any = {
    nome: '',
    mes: '',
    ano: '',
    codigo: '',
    valor: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/valores.json').subscribe(data => {
      this.dados = data;
      this.dadosFiltrados = data;
    });
  }

  filtrar(): void {
    this.dadosFiltrados = this.dados.filter(item =>
      (!this.filtro.nome || item.nome.toLowerCase().includes(this.filtro.nome.toLowerCase())) &&
      (!this.filtro.mes || item.mes.toLowerCase().includes(this.filtro.mes.toLowerCase())) &&
      (!this.filtro.ano || item.ano.toLowerCase().includes(this.filtro.ano.toLowerCase())) &&
      (!this.filtro.codigo || item.codigo.toLowerCase().includes(this.filtro.codigo.toLowerCase())) &&
      (!this.filtro.valor || item.valor.toString().includes(this.filtro.valor))
    );
  }
}
