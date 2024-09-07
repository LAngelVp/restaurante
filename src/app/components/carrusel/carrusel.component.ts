import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.sass'
})
export class CarruselComponent implements AfterViewInit {

  @Input() lista: any[] = [];
  @Input() height_imagen: string = '';
  @Output() nombre_platillo = new EventEmitter<string>()


  get style() {
    return {
      'max-height': this.height_imagen
    };
  }

  ngAfterViewInit(): void {
    this.emitir_nombre();
    if (typeof window !== 'undefined') { // Verifica que estás en un entorno de navegador
      this.setupCarouselEventListeners();
    }
  }

  setupCarouselEventListeners(): void {
    // Espera a que el DOM esté completamente cargado
    setTimeout(() => {
      const carouselElement = document.querySelector('#carrusel') as HTMLElement;

      if (carouselElement) {
        carouselElement.addEventListener('slid.bs.carousel', () => {
          this.emitir_nombre();
        });
      }
    });
  }

  emitir_nombre():void{
    if (typeof document !== 'undefined') {
      const elementoActivo = document.querySelector('.carousel-item.active') as HTMLElement;
      if (elementoActivo) {
        const platilloElement = elementoActivo.querySelector('#nombre_platillo') as HTMLElement;
        if (platilloElement) {
          this.nombre_platillo.emit(platilloElement.innerText.trim());
        }
      }
    }
  }
}
