
import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>

  <p>
    counter: {{countr}}
  </p>
  <button (click)="incrise(1)">+1</button>
  <button (click)="resertCounter()">Resert</button>
  <button (click)="incrise(-1)">-1</button>

  `,
})

export class CounterComponent{

  public countr: number =10;

  incrise( value: number):void {
    this.countr += value;
  }
  resertCounter():void{
    this.countr = 10;
  }
}
