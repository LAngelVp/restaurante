import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.sass'
})
export class ModalComponent {
  @Input() nombre: string = '';
  @Input() detalle: string = '';
  @Input() mostrarModal: boolean = false;
  @Output() cerrar: EventEmitter<void> = new EventEmitter<void>();

  cerrarModal() {
    this.cerrar.emit();
  }


}
