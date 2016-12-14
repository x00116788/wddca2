import { WDD2CA2SuliPage } from './app.po';

describe('wdd2-ca2-suli App', function() {
  let page: WDD2CA2SuliPage;

  beforeEach(() => {
    page = new WDD2CA2SuliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
