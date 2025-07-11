import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargoidsComponent } from './targoids.component';

describe('TargoidsComponent', () => {
  let component: TargoidsComponent;
  let fixture: ComponentFixture<TargoidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargoidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargoidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
