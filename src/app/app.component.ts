import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  titulo: string = 'DoctorApp';
  usuarios: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:5146/api/Usuario').subscribe({
      next: response => this.usuarios = response,
      error: error => console.error('Erro ao buscar usuários:', error),
      complete: () => console.log('Requisição concluída')
    })
  }
}


