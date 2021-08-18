import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-comp1',
  template: `<h1>Inside Marvellous Component : First</h1>
  <app-marvellous-comp2></app-marvellous-comp2>`,
})
export class MarvellousComp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
