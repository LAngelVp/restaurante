import { Component, Input, OnInit } from '@angular/core';
import { CarruselComponent } from "../carrusel/carrusel.component";
import { ApiTheMealDBService } from '../../services/api-the-meal-db.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [
    CommonModule,
    CarruselComponent
  ],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.sass'
})
export class EspecialidadesComponent implements OnInit {
  lista_completa : any[] = [];

  lista_especialidades: string[] = [
    'Ayam Percik',
    'Banana Pancakes',
    'Bean & Sausage Hotpot',
    'Garides Saganaki'
  ];

  constructor(private api: ApiTheMealDBService){}
  ngOnInit(): void {
    for (let i of this.lista_especialidades ){
      this.api.getOnlyOneMeal(i).subscribe(data_platillo => {
        if (data_platillo.meals) {
          this.lista_completa.push(...data_platillo.meals);
        }
      });
    }
  }
}
