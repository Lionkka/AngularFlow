import { Hw9Page } from './app.po';

describe('hw9 App', function() {
  let page: Hw9Page;

  beforeEach(() => {
    page = new Hw9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
