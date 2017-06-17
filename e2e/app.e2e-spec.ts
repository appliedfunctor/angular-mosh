import { AngularMoshPage } from './app.po';

describe('angular-mosh App', () => {
  let page: AngularMoshPage;

  beforeEach(() => {
    page = new AngularMoshPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
