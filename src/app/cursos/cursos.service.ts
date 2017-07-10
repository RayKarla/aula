import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }
  getCursos(){
    return  ['POO', 'Ruby', 'Angular2'];
  }

}
