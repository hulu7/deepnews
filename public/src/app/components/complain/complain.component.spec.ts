import { TestBed } from '@angular/core/testing';

import { ComplainComponent } from './complain.component';

describe('About Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ComplainComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ComplainComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('About Works!');
  });

});
