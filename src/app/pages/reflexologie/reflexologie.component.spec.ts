import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflexologieComponent } from './reflexologie.component';

describe('ReflexologieComponent', () => {
  let component: ReflexologieComponent;
  let fixture: ComponentFixture<ReflexologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflexologieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflexologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
