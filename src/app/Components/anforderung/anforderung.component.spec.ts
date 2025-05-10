import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnforderungComponent } from './anforderung.component';

describe('AnforderungComponent', () => {
  let component: AnforderungComponent;
  let fixture: ComponentFixture<AnforderungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnforderungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnforderungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
