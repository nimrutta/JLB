import { JLBPage } from './app.po';

describe('jlb App', () => {
  let page: JLBPage;

  beforeEach(() => {
    page = new JLBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to jlb!');
  });
});
