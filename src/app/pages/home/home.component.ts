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
  lista_imagenes_calidad = [
    "https://images.pexels.com/photos/2814829/pexels-photo-2814829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1741285/pexels-photo-1741285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];
  titulo_calidad: string = "Calidad que Siente, Sabor que Enamora";
  descripcion_calidad: string = "Disfruta de una experiencia gastronómica excepcional en un ambiente acogedor, con ingredientes frescos y atención personalizada. En nuestro restaurante, cada plato refleja nuestro compromiso con la calidad y el sabor auténtico.";

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
