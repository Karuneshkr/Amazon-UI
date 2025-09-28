"use strict"

import { Builder } from "selenium-webdriver"
export const driverPromise = (async function initializeDriver() {
    let driver;
    try {
    if (!driver) {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.amazon.com/");
    return driver
  }
    } catch (err) {
        console.error("error encountered", err)
    }
    // finally {
    //     await driver.quit()
    // }
})()

