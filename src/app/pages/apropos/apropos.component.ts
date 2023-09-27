import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss']
})
export class AproposComponent {
  constructor(private router: Router) {}

  ngOnInit(){
    this.router.events.pipe(filter(event => event instanceof
      NavigationEnd)).subscribe(()=> {
        window.scrollTo(0, 0);
      })
  } 
  
}
