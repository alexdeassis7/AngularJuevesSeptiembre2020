import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicomponentehijoComponent } from './micomponentehijo.component';

describe('MicomponentehijoComponent', () => {
  let component: MicomponentehijoComponent;
  let fixture: ComponentFixture<MicomponentehijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicomponentehijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicomponentehijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
