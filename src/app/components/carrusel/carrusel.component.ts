import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.sass'
})
export class CarruselComponent {

  @Input() lista: any[] = [];
  @Input() height_imagen: string = '';

  get style() {
    return {
      'max-height': this.height_imagen
    };
  }

}
