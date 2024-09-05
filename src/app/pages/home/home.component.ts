import { Component, OnInit } from '@angular/core';
import { ApiTheMealDBService } from '../../services/api-the-meal-db.service';
import { CommonModule } from '@angular/common';
import { EspecialidadesComponent } from "../../components/especialidades/especialidades.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    EspecialidadesComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  img_header : string = '../../../assets/images/restaurant.jpg';
  platillo_food_header : string = '../../../assets/images/platillo_food_header.svg';
  lista_alimentos: any[] = [];

  // constructor(private alimentos: ApiTheMealDBService){}

  //   ngOnInit(): void {
  //     this.alimentos.getMealByCategory('Seafood').subscribe(data_alimentos => {
  //       this.lista_alimentos = data_alimentos.meals;
  //     });
  //   }
}
