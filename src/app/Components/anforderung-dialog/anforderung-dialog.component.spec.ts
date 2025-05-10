import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnforderungDialogComponent } from './anforderung-dialog.component';

describe('AnforderungDialogComponent', () => {
  let component: AnforderungDialogComponent;
  let fixture: ComponentFixture<AnforderungDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnforderungDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnforderungDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
