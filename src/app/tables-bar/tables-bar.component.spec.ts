import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesBarComponent } from './tables-bar.component';

describe('TablesBarComponent', () => {
  let component: TablesBarComponent;
  let fixture: ComponentFixture<TablesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
