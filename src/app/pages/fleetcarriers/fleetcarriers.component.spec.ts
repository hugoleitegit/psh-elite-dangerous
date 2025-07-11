import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetcarriersComponent } from './fleetcarriers.component';

describe('FleetcarriersComponent', () => {
  let component: FleetcarriersComponent;
  let fixture: ComponentFixture<FleetcarriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetcarriersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetcarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
