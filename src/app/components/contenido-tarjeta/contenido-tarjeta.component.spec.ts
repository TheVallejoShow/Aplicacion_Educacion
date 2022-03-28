import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoTarjetaComponent } from './contenido-tarjeta.component';

describe('ContenidoTarjetaComponent', () => {
  let component: ContenidoTarjetaComponent;
  let fixture: ComponentFixture<ContenidoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
