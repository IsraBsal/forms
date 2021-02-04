import { browser, logging } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { TemplatePage } from './template.po';

const origFn = browser.driver.controlFlow().execute;
// esta función pone un retrazo de tiempo entre cada paso del controlFlow de protractor
browser.driver.controlFlow().execute = function stop() {
    const args = arguments;
  
    origFn.call(browser.driver.controlFlow(), () => {
      return protractor.promise.delayed(10); // tiempo de retraso entre cada paso
    });
  
    return origFn.apply(browser.driver.controlFlow(), args);
};
// puede correr la prueba con el comando ng e2e en la carpeta del proyecto, si necesita cambiar el puerto escriba ademas --port=PORTNUMBER
describe('Casos de ejemplo template',()=>{
    let page: TemplatePage;

    beforeEach(() => { // Este método se ejecuta antes de cada prueba
        page = new TemplatePage(); // crea un objeto de la página reactive forms
    })

    // si ponemos xit o xdescribe jasmine ignorara la prueba o el conjunto de pruebas
    it('Debe poder ir a la pagina de reactive forms', () => { // primera prueba de ejemplo
        page.navigateToTemplatePage();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'template'); // comprobamos que carge la página
    });

    it ('Seleccionamos cuba en el select',async () => { //Componiendo
      await page.navigateToTemplatePage();
      await page.Click();
    })

    
})












