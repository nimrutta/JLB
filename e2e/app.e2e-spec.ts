import { JLBv1Page } from './app.po';

describe('jlbv1 App', function() {
  let page: JLBv1Page;

  beforeEach(() => {
    page = new JLBv1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
