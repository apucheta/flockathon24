import { Component, Inject } from '@angular/core';
import { ICandidate } from '../../core/interfaces/i-candidate';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-alerta',
  templateUrl: './modal-alerta.component.html',
  styleUrl: './modal-alerta.component.css'
})
export class ModalAlertaComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public candidate: ICandidate) {}

}
