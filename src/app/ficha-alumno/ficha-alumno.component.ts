import { Component, Input, Output } from '@angular/core';
import { Alumno } from '../interfaces/alumno.interface';

@Component({
  selector: 'app-ficha-alumno',
  templateUrl: './ficha-alumno.component.html',
  styleUrls: ['./ficha-alumno.component.css']
})
export class FichaAlumnoComponent {
@Input() datos!: Alumno;
@Input() cursos!: any[];

cursoAlumno: any;

constructor(){

}

ngOnInit():void{
  this.cursoAlumno = this.cursos.find(curso => curso.value === this.datos.curso)
}
}
