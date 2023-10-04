import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioComponent } from './bio.component';
import { ActivatedRoute } from '@angular/router';

describe('BioComponent', () => {
  let component: BioComponent;
  let fixture: ComponentFixture<BioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: {
          snapshot: {
            params: '',
            queryParams: ''
          }
        }}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
