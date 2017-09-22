import { Hw7Page } from './app.po';

describe('hw7 App', function() {
  let page: Hw7Page;

  beforeEach(() => {
    page = new Hw7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
