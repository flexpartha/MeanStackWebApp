import { MeanBookAppPage } from './app.po';

describe('mean-book-app App', function() {
  let page: MeanBookAppPage;

  beforeEach(() => {
    page = new MeanBookAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
