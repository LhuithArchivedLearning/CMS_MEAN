import { AngularcmsPage } from './app.po';

describe('angularcms App', function() {
  let page: AngularcmsPage;

  beforeEach(() => {
    page = new AngularcmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
