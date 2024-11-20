import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAleatoriaComponent } from './img-aleatoria.component';

describe('ImgAleatoriaComponent', () => {
  let component: ImgAleatoriaComponent;
  let fixture: ComponentFixture<ImgAleatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgAleatoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgAleatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
