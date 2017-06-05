import { MejorveFrontendPage } from './app.po';

describe('mejorve-frontend App', () => {
  let page: MejorveFrontendPage;

  beforeEach(() => {
    page = new MejorveFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to MEJORVE!');
  });
});
