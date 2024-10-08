import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CarruselComponent } from "../carrusel/carrusel.component";
import { ApiTheMealDBService } from '../../services/api-the-meal-db.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../pages/menu/menu.component';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [
    CommonModule,
    CarruselComponent,
    MenuComponent,
    RouterModule
  ],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.sass'
})
export class EspecialidadesComponent implements OnInit {
  
  titulo: string = "En cada plato, una obra de arte que cuenta historias y despierta todos tus sentidos";
  descripcion: string = "Descubre una experiencia culinaria única donde cada plato es una obra de arte, contando historias y despertando todos tus sentidos con sabores exquisitos y presentaciones inolvidables.";

  lista_completa : any[] = [];

  nombre_platillo_carrusel: string = 'Mejores opciones';


  lista_especialidades: string[] = [
    'Ayam Percik',
    'Banana Pancakes',
    'Bean & Sausage Hotpot',
    'Garides Saganaki'
  ];
  private subscriptions: Subscription[] = [];
  constructor(private api: ApiTheMealDBService){}


  ngOnInit(): void {
    setTimeout(() => {
      for (let i of this.lista_especialidades ){
        this.api.getOnlyOneMeal(i).subscribe(data_platillo => {
          if (data_platillo.meals) {
            this.lista_completa.push(...data_platillo.meals);
          }
        });
      }
    });
  }

  obtener_nombre_platillo(nombre: string): void{
    setTimeout(() => {
      this.nombre_platillo_carrusel = nombre;
    });
  }
}
