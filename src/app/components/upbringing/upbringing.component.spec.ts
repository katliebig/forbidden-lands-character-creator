import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpbringingComponent } from './upbringing.component';

describe('UpbringingComponent', () => {
  let component: UpbringingComponent;
  let fixture: ComponentFixture<UpbringingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpbringingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpbringingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
