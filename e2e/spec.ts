import { browser, element, by } from "protractor";
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

    let sizeSelect: any = element(by.model("$ctrl.selectedSize"));
    let sizeOption: any = sizeSelect.element(by.css(`option[value=${sizes[Math.floor(Math.random() * sizes.length)]}`));
    let selectedSize: any = element(by.className("size__selected-size"));

    sizeSelect.click();
    sizeOption.click();

    expect(selectedSize.getText()).toEqual(sizeOption.getText());

  });

  it("should display added item", () => {

    let name: any = "Coat";
    let color: any = colors[Math.floor(Math.random() * colors.length)];
    let content: any = "Some coat content";
    let summaryTemplate: any = `In Main Component Item: name:${name}; category:${color}; ` +
      `content:${content}; size: not selected; city: not selected`;

    let nameInput: any = element(by.className("add-item__item-name"));
    let colorSelect: any = element(by.css("select.add-item__item-category"));
    let contentTextarea: any = element(by.css("textarea.add-item__item-content"));
    let submitBtn: any = element(by.css("button"));
    let summary: any = element(by.className("add-item__result"));

    nameInput.sendKeys(name);
    colorSelect.click();
    colorSelect.element(by.xpath(`.//option[text()="${color}"]`)).click();
    contentTextarea.sendKeys(content);
    submitBtn.click();

    expect(summary.getText()).toEqual(summaryTemplate);

  });

  it("should change a city", () => {

    var uncheckedCity: any = element(by.css("span + input[type='radio']:not(:checked)"));
    let summary: any = element(by.className("add-item__result"));
    let summaryTemplate: any = `In Main Component Item: name:not specified; category:not specified; ` +
      `content:not specified; size: not selected; city: Moscow city`;

    expect(uncheckedCity.getAttribute("value")).toEqual(cities[1]);

    uncheckedCity.click();

    expect(uncheckedCity.getAttribute("value")).toEqual(cities[0]);
    expect(summary.getText()).toEqual(summaryTemplate);

  });
});