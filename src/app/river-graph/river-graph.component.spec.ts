import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverGraphComponent } from './river-graph.component';

describe('RiverGraphComponent', () => {
  let component: RiverGraphComponent;
  let fixture: ComponentFixture<RiverGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiverGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
