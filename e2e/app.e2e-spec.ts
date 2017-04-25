import { LibroDeRecetasPage } from './app.po';

describe('libro-de-recetas App', () => {
  let page: LibroDeRecetasPage;

  beforeEach(() => {
    page = new LibroDeRecetasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
