import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalConfigComponent } from './global-config.component';

describe('GlobalConfigComponent', () => {
  let component: GlobalConfigComponent;
  let fixture: ComponentFixture<GlobalConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
