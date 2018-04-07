import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';
import {ElementFinder, promise} from 'protractor';

describe('carleasingfront App', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.driver.manage().window().setSize(1920, 1080);
    page = new AppPage();
    page.navigateTo();

  });


  it('it should fill the private form', () => {
    page.clickPrivate();

    page.clickAssetType();
    page.selectAssetType('Vehicle');

    page.clickBrand();
    page.selectBrand('Volkswagen');

    page.clickModel();
    page.selectModel('Tiguan');

    page.clickYear();
    page.selectCarYear('2005');


    page.insertEnginePower(420);
    page.insertAssetPrice(5406);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();
    page.clickPaymentDate(15);

    page.clickNextInCarLeasingForm();

    page.insertName('Dovydas');
    page.insertSurname('Pavel');
    page.insertId('39706270117');
    page.insertPhoneNumber('867326074');
    page.insertEmail('test@hehe.xd');
    page.insertAddress('Topo centro 10');
    page.clickNextInUserForm();
    browser.sleep(500);
    page.clickSubmit();
    browser.sleep(500);
    page.clickFinish();
    browser.sleep(500);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
  });
  it('fails to fill year', () => {
    page.clickPrivate();

    page.clickAssetType();
    page.selectAssetType('Vehicle');

    page.clickBrand();
    page.selectBrand('Audi');

    page.clickModel();
    page.selectModel('A4');

    page.insertEnginePower(80);
    page.insertAssetPrice(5890);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();
    page.clickPaymentDate(30);

    expect(element(by.css('button#nextButtonLeasingForm')).getAttribute('ng-reflect-disabled')).toEqual('true');
  });
  it('fails to fill assettype', () => {
    page.clickPrivate();

    page.clickBrand();
    page.selectBrand('Ford');

    page.clickModel();
    page.selectModel('Focus');

    page.clickYear();
    page.selectCarYear('1997');

    page.insertEnginePower(90);
    page.insertAssetPrice(10000);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();
    page.clickPaymentDate(15);

    expect(element(by.css('button#nextButtonLeasingForm')).getAttribute('ng-reflect-disabled')).toEqual('true');
  });
  it('fails to select model', () => {
    page.clickPrivate();

    page.clickAssetType();
    page.selectAssetType('Vehicle');

    page.clickBrand();
    page.selectBrand('Volkswagen');

    page.clickYear();
    page.selectCarYear('1997');

    page.insertEnginePower(420);
    page.insertAssetPrice(9466);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();
    page.clickPaymentDate(30);

    expect(element(by.css('button#nextButtonLeasingForm')).getAttribute('ng-reflect-disabled')).toEqual('true');
  });
  it('fails to insert engine power', () => {
    page.clickPrivate();

    page.clickAssetType();
    page.selectAssetType('Vehicle');

    page.clickBrand();
    page.selectBrand('Volkswagen');

    page.clickModel();
    page.selectModel('Tiguan');

    page.clickYear();
    page.selectCarYear('2005');

    page.insertAssetPrice(5406);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();
    page.clickPaymentDate(15);

    expect(element(by.css('button#nextButtonLeasingForm')).getAttribute('ng-reflect-disabled')).toEqual('true');
  });
  it('fails to fill asset price', () => {
    page.clickPrivate();

    page.clickAssetType();
    page.selectAssetType('Vehicle');

    page.clickBrand();
    page.selectBrand('Volkswagen');

    page.clickModel();
    page.selectModel('Tiguan');

    page.clickYear();
    page.selectCarYear('2005');

    page.insertEnginePower(420);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();
    page.clickPaymentDate(15);

    expect(element(by.css('button#nextButtonLeasingForm')).getAttribute('ng-reflect-disabled')).toEqual('true');
  });
  it('fails to choose payment date', () => {
    page.clickPrivate();

    page.clickAssetType();
    page.selectAssetType('Vehicle');

    page.clickBrand();
    page.selectBrand('Volkswagen');

    page.clickModel();
    page.selectModel('Tiguan');

    page.clickYear();
    page.selectCarYear('2005');

    page.insertEnginePower(420);
    page.insertAssetPrice(5406);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();

    expect(element(by.css('button#nextButtonLeasingForm')).getAttribute('ng-reflect-disabled')).toEqual('true');
  });
///
  //
  //
  //
  //
  //
  //
  //
  //
  it('it should fill first form and forget to fill number in second form', () => {
    page.clickPrivate();

    page.clickAssetType();
    page.selectAssetType('Vehicle');

    page.clickBrand();
    page.selectBrand('Volkswagen');

    page.clickModel();
    page.selectModel('Tiguan');

    page.clickYear();
    page.selectCarYear('2005');


    page.insertEnginePower(97);
    page.insertAssetPrice(5406);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();
    page.clickPaymentDate(30);

    page.clickNextInCarLeasingForm();

    page.insertName('Julius');
    page.insertSurname('Test');
    page.insertId('49706278117');
    page.insertEmail('testinmg@something.h');
    page.insertAddress('Nemezio 5');

    expect(element(by.css('button#nextButtonUserForm')).getAttribute('ng-reflect-disabled')).toEqual('true');
  });
  it('it should fill first form and forget to fill surname in second form', () => {
    page.clickPrivate();

    page.clickAssetType();
    page.selectAssetType('Vehicle');

    page.clickBrand();
    page.selectBrand('Volkswagen');

    page.clickModel();
    page.selectModel('Tiguan');

    page.clickYear();
    page.selectCarYear('2005');


    page.insertEnginePower(97);
    page.insertAssetPrice(5406);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();
    page.clickPaymentDate(30);

    page.clickNextInCarLeasingForm();

    page.insertName('Julius');
    page.insertId('49706278117');
    page.insertPhoneNumber('867326074');
    page.insertEmail('testinmg@something.h');
    page.insertAddress('Nemezio 5');

    expect(element(by.css('button#nextButtonUserForm')).getAttribute('ng-reflect-disabled')).toEqual('true');
  });
  it('it should fill first form and fill bad email', () => {
    page.clickPrivate();

    page.clickAssetType();
    page.selectAssetType('Vehicle');

    page.clickBrand();
    page.selectBrand('Volkswagen');

    page.clickModel();
    page.selectModel('Tiguan');

    page.clickYear();
    page.selectCarYear('2005');


    page.insertEnginePower(97);
    page.insertAssetPrice(5406);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();
    page.clickPaymentDate(30);

    page.clickNextInCarLeasingForm();

    page.insertName('Jolanta');
    page.insertSurname('Kaspr');
    page.insertId('49706278117');
    page.insertPhoneNumber('867326074');
    page.insertEmail('testingemail');
    page.insertAddress('Nemezio 5');

    expect(element(by.css('button#nextButtonUserForm')).getAttribute('ng-reflect-disabled')).toEqual('true');
  });
  it('it should fill first form and fill bad id', () => {
    page.clickPrivate();

    page.clickAssetType();
    page.selectAssetType('Vehicle');

    page.clickBrand();
    page.selectBrand('Volkswagen');

    page.clickModel();
    page.selectModel('Tiguan');

    page.clickYear();
    page.selectCarYear('2005');


    page.insertEnginePower(97);
    page.insertAssetPrice(5406);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();
    page.clickPaymentDate(30);

    page.clickNextInCarLeasingForm();

    page.insertName('Julius');
    page.insertSurname('Test');
    page.insertId('49799278117');
    page.insertPhoneNumber('867326074');
    page.insertEmail('testinmg@something.h');
    page.insertAddress('Nemezio 5');

    expect(element(by.css('button#nextButtonUserForm')).getAttribute('ng-reflect-disabled')).toEqual('true');
  });
  it('it should fill first form and forget to fill Adress', () => {
    page.clickPrivate();

    page.clickAssetType();
    page.selectAssetType('Vehicle');

    page.clickBrand();
    page.selectBrand('Volkswagen');

    page.clickModel();
    page.selectModel('Tiguan');

    page.clickYear();
    page.selectCarYear('2005');


    page.insertEnginePower(97);
    page.insertAssetPrice(5406);

    page.changeAdvancedPaymentPercentage();
    page.changeLeasePeriod();
    page.changeMargin();
    page.clickPaymentDate(30);

    page.clickNextInCarLeasingForm();

    page.insertName('Julius');
    page.insertSurname('Test');
    page.insertId('49706278117');
    page.insertPhoneNumber('867326074');
    page.insertEmail('testinmg@something.h');

    expect(element(by.css('button#nextButtonUserForm')).getAttribute('ng-reflect-disabled')).toEqual('true');
  });
});
