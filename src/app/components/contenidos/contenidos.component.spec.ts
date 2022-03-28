import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidosComponent } from './contenidos.component';

describe('ContenidosComponent', () => {
  let component: ContenidosComponent;
  let fixture: ComponentFixture<ContenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
