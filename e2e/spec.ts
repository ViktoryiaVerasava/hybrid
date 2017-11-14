import { browser, element, by, ElementFinder } from "protractor";
import { } from "jasmine";
import { } from "jasminewd2";

describe("hybrid app ", () => {

  const sizes: string[] = ["xs", "s", "m", "l", "xl"];
  const colors: string[] = ["Red", "Gray", "Blue"];
  const cities: string[] = ["Minsk", "Moscow"];

  beforeEach(() => {
    browser.get("http://localhost:8081/");
  });

  it("should dispalay selected size", () => {

    let sizeSelect: ElementFinder = element(by.model("$ctrl.selectedSize"));
    let sizeOption: ElementFinder = sizeSelect.element(by.css(`option[value=${sizes[Math.floor(Math.random() * sizes.length)]}`));
    let selectedSize: ElementFinder = element(by.className("size__selected-size"));

    sizeSelect.click();
    sizeOption.click();

    expect(selectedSize.getText()).toEqual(sizeOption.getText());

  });

  it("should display added item", () => {

    let name: string = "Coat";
    let color: string = colors[Math.floor(Math.random() * colors.length)];
    let content: string = "Some coat content";
    let summaryTemplate: string = `In Main Component Item: name:${name}; category:${color}; ` +
      `content:${content}; size: not selected; city: not selected`;

    let nameInput: ElementFinder = element(by.className("add-item__item-name"));
    let colorSelect: ElementFinder = element(by.css("select.add-item__item-category"));
    let contentTextarea: ElementFinder = element(by.css("textarea.add-item__item-content"));
    let submitBtn: ElementFinder = element(by.css("button"));
    let summary: ElementFinder = element(by.className("add-item__result"));

    nameInput.sendKeys(name);
    colorSelect.click();
    colorSelect.element(by.xpath(`.//option[text()="${color}"]`)).click();
    contentTextarea.sendKeys(content);
    submitBtn.click();

    expect(summary.getText()).toEqual(summaryTemplate);

  });

  it("should change a city", () => {

    var uncheckedCity: ElementFinder = element(by.css("span + input[type='radio']:not(:checked)"));
    let summary: ElementFinder = element(by.className("add-item__result"));
    let summaryTemplate: string = `In Main Component Item: name:not specified; category:not specified; ` +
      `content:not specified; size: not selected; city: Moscow (Russia)`;

    expect(uncheckedCity.getAttribute("value")).toEqual(cities[1]);

    uncheckedCity.click();

    expect(uncheckedCity.getAttribute("value")).toEqual(cities[0]);
    expect(summary.getText()).toEqual(summaryTemplate);

  });
});