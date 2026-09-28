import { test } from "@playwright/test";

test("newSignup", async({page})=>{

    await page.goto('https://www.flipkart.com/')
} )