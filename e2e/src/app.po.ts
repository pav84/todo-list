import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getListWrapper() {
    return element(by.className('info')).getText();
  }
}
