import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanadaComponent } from './empanada.component';

describe('EmpanadaComponent', () => {
  let component: EmpanadaComponent;
  let fixture: ComponentFixture<EmpanadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpanadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
