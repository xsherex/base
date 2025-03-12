import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IscrivitiComponent } from './iscriviti.component';

describe('IscrivitiComponent', () => {
  let component: IscrivitiComponent;
  let fixture: ComponentFixture<IscrivitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IscrivitiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IscrivitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
