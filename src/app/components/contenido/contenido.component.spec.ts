import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoComponent } from './contenido.component';

describe('ContenidoComponent', () => {
  let component: ContenidoComponent;
  let fixture: ComponentFixture<ContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
