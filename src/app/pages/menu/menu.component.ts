import { Component, OnInit } from '@angular/core';
import { ApiTheMealDBService } from '../../services/api-the-meal-db.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    ModalComponent
],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent implements OnInit {
  todas_las_comidas : any[] = [];
  nombre:string = '';
  detalle:string = '';
  mostrarModal : boolean = false;

  constructor(
    private comidas : ApiTheMealDBService
  ){}

  ngOnInit(): void {
    this.comidas.getAllMeal().subscribe(data_comidas => {
      this.todas_las_comidas = data_comidas.meals;
    })
  }

  abrir_modal(nombre: string, detalle: string){
    this.nombre = nombre;
    this.detalle = detalle;
    this.mostrarModal = true;
  }
  cerrarModal() {
    this.mostrarModal = false;
  }
}
