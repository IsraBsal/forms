import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class ReactivePage { // clase de la página formularios reactive

  title: ElementFinder;
  nameinput: ElementFinder;
  saveButton: ElementFinder;
  addButton: ElementFinder;
  deleteButton: ElementArrayFinder;
  errorsText: ElementArrayFinder;
  apellidoinput: ElementFinder;

  constructor() {
    this.title = element(by.css('h4')); // obtenemos el elemento h4
    this.nameinput = element(by.css('input[formControlName=nombre]')); // obtenemos en input por formControlName de nombre
    this.saveButton = element(by.className('btn-outline-primary')); // obtenemos el elemento por el nombre de la clase
    this.addButton = element(by.className('btn-success'));
    this.errorsText = element.all(by.css('.text-danger')); // obtenemos todos los elementos con la clase text-danger
    this.apellidoinput=element(by.css('input[formControlName=apellido]'));//Obtenemos el input por formControlName de apellido
  }

  navigateToReactivePage(): Promise<unknown> { // navega a la ruta /reactive
    return browser.get(browser.baseUrl + 'reactive') as Promise<unknown>;
  }

  getTitleText(): Promise<string> { // obtiene el titulo de la página
    return this.title.getText() as Promise<string>;
  }

  setName(name: string): Promise<void>{ // escribe el el input name
    this.nameinput.clear();
    return this.nameinput.sendKeys(name) as Promise<void>;
  }

  getName(): Promise<string>{ // regresa el texto del input name
    return this.nameinput.getAttribute('value') as Promise<string>;
  }

  clickSaveButton(): Promise<void>{ // presiona el botón guardar
    return this.saveButton.click() as Promise<void>;
  }

  clickAddButton(): Promise<void>{ // presiona el botón añadir
    return this.addButton.click() as Promise<void>;
  }

  deleteHobbieButtonIsPresent(): Promise<boolean>{ // comprueba si el botón borrar existe
    this.addButton = element(by.className('btn-danger'));
    return this.addButton.isPresent() as Promise<boolean>;
  }

  getTextOfEspecificError(indice: number): Promise<string>{ // obtiene el texto de un mensaje de error especifico
    return this.errorsText.get(indice).getText() as Promise<string>;
  }

  setApellido(apellido: string): Promise<void>{ // escribe el el input name
    this.apellidoinput.clear();
    return this.apellidoinput.sendKeys(apellido) as Promise<void>;
  }

  getApellido(): Promise<string>{ // regresa el texto del input name
    return this.apellidoinput.getAttribute('value') as Promise<string>;
  }




}
