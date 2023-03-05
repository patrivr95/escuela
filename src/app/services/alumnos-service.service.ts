import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServiceService {

  private listadoAlumnos: Alumno[] = [
    {
      nombre: 'Jose Carlos',
      edad: 30,
      email: 'josecarlos@gmail.com',
      curso: 3
    },
    {
      nombre: 'Radif',
      edad: 27,
      email: 'radif@gmail.com',
      curso: 3
    },
    {
      nombre: 'Antonio',
      edad: 25,
      email: 'antonio@gmail.com',
      curso: 4
    },
    {
      nombre: 'Isabel',
      edad: 28,
      email: 'isabel@gmail.com',
      curso: 6
    },
    {
      nombre: 'Franco',
      edad: 23,
      email: 'franco@gmail.com',
      curso: 5
    },
    {
      nombre: 'Francisco',
      edad: 28,
      email: 'francisco@gmail.com',
      curso: 3
    },
    {
      nombre: 'Jose Manuel',
      edad: 23,
      email: 'josemanuel@gmail.com',
      curso: 4
    },
  ]

  cursos: any = [
    {value: 1, name: '1 de Primaria'},
    {value: 2, name: '2 de Primaria'},
    {value: 3, name: '3 de Primaria'},
    {value: 4, name: '4 de Primaria'},
    {value: 5, name: '5 de Primaria'},
    {value: 6, name: '6 de Primaria'},
    {value: 7, name: '1 de ESO'},
    {value: 8, name: '2 de ESO'},
    {value: 9, name: '3 de ESO'},
    {value: 10, name: '4 de ESO'}
  ]

  constructor() { }

  getAll(){
    return this.listadoAlumnos;
  }

  getCursos() {
    return this.cursos;
  }

  getByCurso(curso: number){
    return this.listadoAlumnos.filter(alumno => alumno.curso === curso);
  }
}
