import { Component } from '@angular/core';

@Component({
  selector: 'layout',  // <layout></layout>
  styleUrls: [ './layout.component.css' ],
  templateUrl: './layout-public.component.html'
})
export class LayoutPublicComponent {
  //localState = { value: '' };
  constructor() {

  }

  ngOnInit() {
    console.log('[LAYOUT] LayoutPublicComponent Init');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
  }
}
