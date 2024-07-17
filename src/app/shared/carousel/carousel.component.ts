import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  selectedIndex = 0;

  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  slideInterval = 4000;
  autoSlideRef: any;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
   this.autoSlideRef = setInterval(() => {
      this.slide();      
    }, this.slideInterval);
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    this.selectedIndex === 0
      ? (this.selectedIndex = this.images.length - 1)
      : this.selectedIndex--;
    this.resetAutoSlide()
      
  }

  onNextClick(): void {
    this.selectedIndex === this.images.length - 1
      ? (this.selectedIndex = 0)
      : this.selectedIndex++;
    this.resetAutoSlide()
  }

  slide(): void {
    this.selectedIndex === this.images.length - 1
      ? (this.selectedIndex = 0)
      : this.selectedIndex++;
  }

  resetAutoSlide(): void {
    clearInterval(this.autoSlideRef);
    this.autoSlideImages()    
  }
}
