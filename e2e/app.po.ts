import {browser, by, element, ElementFinder, promise, protractor} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  clickPrivate() {
    this.waitingToBeClickableAndClicking(element(by.css('[id="privateButton"]')));
  }

  clickAssetType() {
    this.waitingToBeClickableAndClicking(element(by.css('[placeholder="Asset Type"]')));
  }

  selectAssetType(assetType: string) {
    this.waitingToBeClickableAndClicking(element(by.cssContainingText('.mat-select-content.ng-trigger.ng-trigger-fadeInContent span', assetType)));
  }

  clickBrand() {
    this.waitingToBeClickableAndClicking(element(by.css('[placeholder="Brand"]')));
  }

  selectBrand(brand) {
    this.waitingToBeClickableAndClicking(element(by.cssContainingText('.mat-select-content.ng-trigger.ng-trigger-fadeInContent span', brand)));
  }

  clickModel() {
    this.waitingToBeClickableAndClicking(element(by.css('[placeholder="Model"]')));
  }

  selectModel(model: string) {
    this.waitingToBeClickableAndClicking(element(by.cssContainingText('.mat-select-content.ng-trigger.ng-trigger-fadeInContent span', model)));
  }

  clickYear() {
    this.waitingToBeClickableAndClicking(element(by.css('mat-select[formcontrolname="year"]')));
  }

  selectCarYear(year: string) {
    this.waitingToBeClickableAndClicking(element(by.cssContainingText('.mat-select-content.ng-trigger.ng-trigger-fadeInContent span', year)));
  }

  insertEnginePower(num: number) {
    element(by.css('[ng-reflect-name="enginePower"]')).sendKeys(num);
  }

  insertAssetPrice(num: number) {
    element(by.css('[ng-reflect-name="assetPrice"]')).sendKeys(num);
  }

  changeAdvancedPaymentPercentage() {
    element(by.css('[ng-reflect-name="advancePaymentPercentage"]')).click();
  }

  changeLeasePeriod() {
    element(by.css('[ng-reflect-name="leasePeriod"]')).click();
  }

  changeMargin() {
    element(by.css('[ng-reflect-name="margin"]')).click();
  }

  clickPaymentDate(num: number) {
    this.waitingToBeClickableAndClicking(element(by.cssContainingText('[ng-reflect-name="paymentDate"] mat-radio-button', num.toString())));
  }

  clickNextInCarLeasingForm() {
    this.waitingToBeClickableAndClicking(element(by.css('[id="nextButtonLeasingForm"]')));
  }

  insertName(name: string) {
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.css('[ng-reflect-name="firstName"]'))));
    element(by.css('[ng-reflect-name="firstName"]')).sendKeys(name);
  }

  insertSurname(surname: string) {
    element(by.css('[ng-reflect-name="lastName"]')).sendKeys(surname);
  }

  insertId(id: string) {
    element(by.css('[ng-reflect-name="personalCode"]')).sendKeys(id);
  }

  insertPhoneNumber(phoneNumber: string) {
    element(by.css('[ng-reflect-name="phoneNumber"]')).sendKeys(phoneNumber);
  }

  insertEmail(email: string) {
    element(by.css('[ng-reflect-name="email"]')).sendKeys(email);
  }

  insertAddress(address: string) {
    element(by.css('[ng-reflect-name="address"]')).sendKeys(address);
  }

  printSliderDimensions() {
    const we = element(by.css('[ng-reflect-name="advancePaymentPercentage"]')).getWebElement();
    browser.executeScript('return arguments[0].getClientRects()', we).then(re => {
      console.log('client rects: ', re);
    });
  }

  clickSubmit() {
    this.waitingToBeClickableAndClicking(element(by.css('[id="previewSubmitButton"]')));
  }

  clickFinish() {
    this.waitingToBeClickableAndClicking(element(by.css('[id="finishButton"]')));
  }

  clickNextInUserForm() {
    this.waitingToBeClickableAndClicking(element(by.css('[id="nextButtonUserForm"]')));
  }


  private waitingToBeClickableAndClicking(value) {
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(value), 500);
    value.click();
  }
}

