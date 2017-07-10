import { AulaPage } from './app.po';

describe('aula App', () => {
  let page: AulaPage;

  beforeEach(() => {
    page = new AulaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
