import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkShortenerNewComponent } from './link-shortener-new.component';

describe('LinkShortenerNewComponent', () => {
  let component: LinkShortenerNewComponent;
  let fixture: ComponentFixture<LinkShortenerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkShortenerNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkShortenerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
