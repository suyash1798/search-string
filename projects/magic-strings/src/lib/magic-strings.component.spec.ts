import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicStringsComponent } from './magic-strings.component';

describe('MagicStringsComponent', () => {
  let component: MagicStringsComponent;
  let fixture: ComponentFixture<MagicStringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicStringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
