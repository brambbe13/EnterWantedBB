import { WebDriver, By, until } from "selenium-webdriver";

export class SpecPage {
    driver: WebDriver;
    // navigation added Enter Wanted webpage url
    url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
  //selectors from Enter Wanted for Header and Name input fields
    headerBar: By = By.name("hdrInput");
    nameBar: By = By.name("namInput");
    
  
    //I heavely relied on the solution for this from previous lab
    //I am going to try to understand what each of these mean
    constructor(driver: WebDriver) {
      this.driver = driver;
    }
    async navigate() {
        //get Enter Wanted's url
      await this.driver.get(this.url);
      //locate Search bar
      await this.driver.wait(until.elementLocated(this.headerBar));
      //this section is for it to find te search bar again?
      await this.driver.wait(
        until.elementIsVisible(await this.driver.findElement(this.headerBar))
      );
    }
  //these two following sections are to do a search on the search bar
    async sendKeys(elementBy: By, keys) {
      await this.driver.wait(until.elementLocated(elementBy));
      return this.driver.findElement(elementBy).sendKeys(keys);
    }
  
    async getText(elementBy: By) {
      await this.driver.wait(until.elementLocated(elementBy));
      return (await this.driver.findElement(elementBy)).getText();
    }
  //this is for it to type the string we are going to be searching
    async doSearch(text: string) {
      return this.sendKeys(this.headerBar, `${text}\n`);
    }
  
    }
  
  

