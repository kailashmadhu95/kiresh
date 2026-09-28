import { test } from "@playwright/test";

test("newSignup", async({page})=>{

    await page.goto('https://www.amazon.com/')
} )