const { Builder, Capabilities, By} = require("selenium-webdriver")

require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {

    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add a movie', async () => {
     await driver.findElement(By.xpath('//input')).sendKeys('The Land Before Time 7')

     await driver.findElement(By.xpath('//button')).click()

     await driver.sleep(3000)

     const movie = await driver.findElement(By.xpath('//li'))

     const displayed = movie.isDisplayed()

     expect(displayed).toBeTruthy()

     await driver.sleep(5000)

})