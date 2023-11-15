import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksByAuthorPage } from './books-by-author.page';

describe('BooksByAuthorPage', () => {
  let component: BooksByAuthorPage;
  let fixture: ComponentFixture<BooksByAuthorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BooksByAuthorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
