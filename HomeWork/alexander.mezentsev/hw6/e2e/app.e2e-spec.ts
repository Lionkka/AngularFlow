import { Hw6Page } from './app.po';

describe('hw6 App', function() {
  let page: Hw6Page;

  beforeEach(() => {
    page = new Hw6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
