import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `    
              <h1>{{ title }}</h1>
            `,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() title!: string;
}

