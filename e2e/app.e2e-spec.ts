import { NgBootstrapProgressBarTestPage } from './app.po';

describe('ng-bootstrap-progress-bar-test App', () => {
  let page: NgBootstrapProgressBarTestPage;

  beforeEach(() => {
    page = new NgBootstrapProgressBarTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
