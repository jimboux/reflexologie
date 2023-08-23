import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-reflexologie',
  templateUrl: './reflexologie.component.html',
  styleUrls: ['./reflexologie.component.scss']
})
export class ReflexologieComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.fragment.pipe(filter(fragment => !!fragment)).subscribe(fragment => {
      const element = document.querySelector(`#${fragment}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
}
}
