import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-reflexologie',
  templateUrl: './reflexologie.component.html',
  styleUrls: ['./reflexologie.component.scss']
})
export class ReflexologieComponent implements AfterViewInit {
  private sections!: HTMLElement[];
  private links!: HTMLElement[];

  constructor(private route: ActivatedRoute, private router: Router, private elementRef: ElementRef) {}

  windowSize$ = new Subject<number>();

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowSize$.next(window.innerHeight);
    this.adaptIndicatorBarPosition();
}

  @HostListener('window:scroll', ['$event'])
    onScroll() {
      this.adaptIndicatorBarPosition();
      let index = this.sections.findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
      });
      if (index !== -1) {
        this.highlightLink(index);
      }
    }

  highlightLink(index: number) {
    this.links.forEach((link, i) => {
      if (i === index) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    this.adaptIndicatorBarPosition();
  }


  ngOnInit() {
    this.route.fragment.pipe(filter(fragment => !!fragment)).subscribe(fragment => {
      const element = document.querySelector(`#${fragment}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
}

adaptIndicatorBarPosition() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  // Calculer le pourcentage de la position actuelle par rapport à la hauteur totale
  const percentScrolled = (scrollPosition / (fullHeight - windowHeight)) * 100;

  // Mettre à jour la position de l'indicateur
  document.documentElement.style.setProperty(
    '--positionForIndicatorBar',
    percentScrolled + '%'
  );
}

ngAfterViewInit(): void {
   this.sections = [
    this.elementRef.nativeElement.querySelector('#section1'),
    this.elementRef.nativeElement.querySelector('#section2'),
    this.elementRef.nativeElement.querySelector('#section3')
  ];

  this.links = [
    this.elementRef.nativeElement.querySelector('#link-section1'),
    this.elementRef.nativeElement.querySelector('#link-section2'),
    this.elementRef.nativeElement.querySelector('#link-section3')
  ];

  this.route.fragment.subscribe(() => {
    this.onScroll();
  });
}

onClickAncor($event: MouseEvent) {  
  // document.documentElement.style.setProperty(
  //   '--positionForIndicatorBar',
  //   $event.clientX + '%'
  // );
}
}
