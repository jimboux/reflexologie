import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: 
            `@if (booleanVisibilityInLoarder) {
  <div class="modal-loader">
    <div class="loader">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="bar4"></div>
      <div class="bar5"></div>
      <div class="bar6"></div>
      <div class="bar7"></div>
      <div class="bar8"></div>
      <div class="bar9"></div>
      <div class="bar10"></div>
      <div class="bar11"></div>
      <div class="bar12"></div>
    </div>
  </div>
}
`,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() booleanVisibilityInLoarder!: boolean;
}
