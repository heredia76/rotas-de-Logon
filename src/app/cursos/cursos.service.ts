import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
    {id: 1, nome: 'Angular2'},
    {id: 2, nome: 'Java'}
  ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      // tslint:disable-next-line:triple-equals
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }
  constructor() { }
}