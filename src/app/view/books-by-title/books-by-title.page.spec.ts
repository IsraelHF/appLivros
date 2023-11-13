import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksByTitlePage } from './books-by-title.page';

describe('BooksByTitlePage', () => {
  let component: BooksByTitlePage;
  let fixture: ComponentFixture<BooksByTitlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BooksByTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
