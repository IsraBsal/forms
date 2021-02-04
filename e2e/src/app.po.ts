import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class ReactivePage { // clase de la página formularios reactive

  title: ElementFinder;
  nameinput: ElementFinder;
  saveButton: ElementFinder;
  addButton: ElementFinder;
  deleteButton: ElementArrayFinder;
  errorsText: ElementArrayFinder;
  apellidoinput: ElementFinder;
  contrasenainput: ElementFinder;
  correoinput: ElementFinder;
  usuarioinput: ElementFinder;
  repcontrasenainput: ElementFinder;
  estadoinput: ElementFinder;
  municipioinput: ElementFinder;

  constructor() {
    this.title = element(by.css('h4')); // obtenemos el elemento h4
    this.nameinput = element(by.css('input[formControlName=nombre]')); // obtenemos en input por formControlName de nombre
    this.saveButton = element(by.className('btn-outline-primary')); // obtenemos el elemento por el nombre de la clase
    this.addButton = element(by.className('btn-success'));
    this.errorsText = element.all(by.css('.text-danger')); // obtenemos todos los elementos con la clase text-danger
    this.apellidoinput=element(by.css('input[formControlName=apellido]'));//Obtenemos el input por formControlName de apellido
    this.contrasenainput=element(by.css('input[formControlName=pass1]'));//Obtenemos la contrasena por formControlName de pass1
    this.correoinput=element(by.css('input[formControlName=correo]')); //Obtenemos el correo por formConrtolName de correo
    this.usuarioinput=element(by.css('input[formControlName=usuario]')); //Obtenemos el usuario por formControlName de usuario
    this.repcontrasenainput=element(by.css('input[formControlName=pass2]'))//Obtenemos repetir contrasena por formCOntrolName de pass2
    this.estadoinput=element(by.css('input[formControlName=estado]')) //
    this.municipioinput=element(by.css('input[formControlName=municipio]'))
    this.deleteButton = element.all(by.className('btn-danger')); //Configurando el boton de eliminar hobbie como un array
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

  clickDeleteButton(): Promise<void>{
    return this.deleteButton.click() as Promise<void>;
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

  setContrasena(contrasena: string): Promise<void>{ // escribe el el input contrasena
    this.contrasenainput.clear();
    return this.contrasenainput.sendKeys(contrasena) as Promise<void>;
  }

  getContrasena(): Promise<string>{ // regresa el texto del input contrasena
    return this.contrasenainput.getAttribute('value') as Promise<string>;
  }

  setCorreo(correo: string): Promise<void>{ // escribe el el input correo
    this.correoinput.clear();
    return this.correoinput.sendKeys(correo) as Promise<void>;
  }

  getCorreo(): Promise<string>{ // regresa el texto del input correo
    return this.correoinput.getAttribute('value') as Promise<string>;
  }

  setUsuario(usuario: string): Promise<void>{ // escribe el el input usuario
    this.usuarioinput.clear();
    return this.usuarioinput.sendKeys(usuario) as Promise<void>;
  }

  getUsuario(): Promise<string>{ // regresa el texto del input usuario
    return this.usuarioinput.getAttribute('value') as Promise<string>;
  }

  setContrasena2(contrasena2: string): Promise<void>{ // escribe el el input name
    this.repcontrasenainput.clear();
    return this.repcontrasenainput.sendKeys(contrasena2) as Promise<void>;
  }

  getContrasena2(): Promise<string>{ // regresa el texto del input name
    return this.repcontrasenainput.getAttribute('value') as Promise<string>;
  }

  setEstado(estado: string): Promise<void>{ // escribe el el input name
    this.estadoinput.clear();
    return this.estadoinput.sendKeys(estado) as Promise<void>;
  }

  getEstado(): Promise<string>{ // regresa el texto del input name
    return this.estadoinput.getAttribute('value') as Promise<string>;
  }

  setMunicipio(municipio: string): Promise<void>{ // escribe el el input name
    this.municipioinput.clear();
    return this.municipioinput.sendKeys(municipio) as Promise<void>;
  }

  getMunicipio(): Promise<string>{ // regresa el texto del input name
    return this.municipioinput.getAttribute('value') as Promise<string>;
  }
}
