import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    if (this.valor == 0) {
      alert("Não é possível diminuir para um valor negativo!")
    }
    else {
      this.valor--;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
