import { browser, by, element } from 'protractor';

export class JLBPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jlb-root h1')).getText();
  }
}
