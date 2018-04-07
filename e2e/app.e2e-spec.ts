import {AppPage} from './app.po';
import {browser} from 'protractor';
import { ElementFinder, promise } from 'protractor';
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


    //page.printSliderDimensions();
    //browser.sleep(1000);
    page.clickNextInCarLeasingForm();

    //browser.sleep(500);
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


});
