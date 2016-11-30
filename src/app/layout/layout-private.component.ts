import { Component } from '@angular/core';

@Component({
  selector: 'layout',  // <layout></layout>
  styleUrls: [ './layout.component.css' ],
  templateUrl: './layout-private.component.html'
})
export class LayoutPrivateComponent {
  //localState = { value: '' };
  constructor() {

  }

  ngOnInit() {
    console.log('[LAYOUT] LayoutPrivateComponent Init');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
  }
}
