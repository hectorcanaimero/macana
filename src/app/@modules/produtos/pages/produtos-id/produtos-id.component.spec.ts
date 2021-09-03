import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosIdComponent } from './produtos-id.component';

describe('ProdutosIdComponent', () => {
  let component: ProdutosIdComponent;
  let fixture: ComponentFixture<ProdutosIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
