import { SpecPage } from "./PagePractice";
const chromedriver = require("chromedriver");
import {WebDriver, Builder, Capabilities, By } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new SpecPage(driver);

//testing header's character count of 9-19 characters to 20 characters
test("Header", async () => {
  await page.navigate();
  await page.doSearch("DUI Violation Per WI");
});

afterAll(async () => {
  await driver.quit();
});
  
//Jira link: https://dmutah.atlassian.net/jira/software/c/projects/BB5DL/issues/BB5DL-37?jql=project%20%3D%20%22BB5DL%22%20AND%20text%20~%20%22enter%20wanted%22%20ORDER%20BY%20created%20DESC