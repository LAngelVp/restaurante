import { Component, OnInit } from '@angular/core';
import { ApiTheMealDBService } from '../../services/api-the-meal-db.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent implements OnInit {
  todas_las_comidas : any[] = [];

  constructor(
    private comidas : ApiTheMealDBService
  ){}

  ngOnInit(): void {
    this.comidas.getAllMeal().subscribe(data_comidas => {
      this.todas_las_comidas = data_comidas.meals;
    })
  }
}
