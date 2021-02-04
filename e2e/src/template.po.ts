import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class TemplatePage{ //Clase de la pagina template reactive
    
    title: ElementFinder;
    paisselect: ElementFinder;
    errorsText: ElementArrayFinder;

    constructor(){
        this.title = element(by.css('h4'));
        this.paisselect=element(by.cssContainingText('option','Cuba'));
        this.errorsText = element.all(by.css('.text-danger'));
    }

    navigateToTemplatePage(): Promise<unknown> { // navega a la ruta /reactive
        return browser.get(browser.baseUrl + 'template') as Promise<unknown>;
    }
    
    getTextOfEspecificRow(indice: number): Promise<string>{ // obtiene el texto de un mensaje de error especifico
        return this.errorsText.get(indice).getText() as Promise<string>;
    }

    getElementSelect(): Promise <string>{
        return this.paisselect.getText() as Promise<string>
    }

    isSelected(): Promise <boolean>{
        this.paisselect.click()
        return this.paisselect.isSelected() as Promise<boolean>
    }

    

}