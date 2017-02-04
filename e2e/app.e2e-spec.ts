import { MyEurosPage } from './app.po';

describe('my-euros App', function() {
  let page: MyEurosPage;

  beforeEach(() => {
    page = new MyEurosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
