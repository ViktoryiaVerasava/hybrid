import { browser, element, by} from 'protractor';
import { } from 'jasmine';
import { } from 'jasminewd2';

describe('hybrid app ', () => {

  const sizes: string[] = ['xs', 's', 'm', 'l', 'xl'];
  const colors: string[] = ['Red', 'Gray', 'Blue'];
  const cities: string[] = ['Minsk', 'Moscow'];

  beforeEach(() => {
    browser.get('http://localhost:8081/');
  });

  it('should dispalay selected size', () => {

    let sizeSelect = element(by.model('$ctrl.selectedSize'));   
    let sizeOption = sizeSelect.element(by.css(`option[value=${sizes[Math.floor(Math.random() * sizes.length)]}`));
    let selectedSize = element(by.className('size__selected-size'));
   
    sizeSelect.click();
    sizeOption.click();   
    browser.switchTo().alert().accept();
   
    expect(selectedSize.getText()).toEqual(sizeOption.getText());

  });

  it('should display added item', function () {

    let name = 'Coat';
    let color = colors[Math.floor(Math.random() * colors.length)];
    let content = 'Some coat content';
    let summaryTemplate = `Added Item: name:${name}; category:${color}; content:${content}; size:`;

    let nameInput = element(by.xpath('.//input[contains(@class,"add-item__item-name")]'));
    let colorSelect = element(by.css('select.add-item__item-category'));
    let contentTextarea = element(by.css('textarea.add-item__item-content'));
    let submitBtn = element(by.css('button'));
    let summary = element(by.css('div[ng-if="$ctrl.addedItem"]'));

    nameInput.sendKeys(name);
    colorSelect.click();
    colorSelect.element(by.xpath(`.//option[text()="${color}"]`)).click();
    contentTextarea.sendKeys(content);
    submitBtn.click();
    browser.switchTo().alert().accept();   

    expect(summary.getText()).toEqual(summaryTemplate);

  });

  it('should change a city', function () {
    
    var uncheckedCity = element(by.css('span + input[type="radio"]:not(:checked)'));
    expect(uncheckedCity.getAttribute('value')).toEqual(cities[1]);

    uncheckedCity.click();
    browser.switchTo().alert().accept();   
    expect(uncheckedCity.getAttribute('value')).toEqual(cities[0]);
    
   });
});