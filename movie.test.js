const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');

let driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { addMovie } = require('../functions/addMovie');

beforeEach(async () => {
  await driver.get('http://127.0.0.1:5500/movie-list/index.html');
});

afterAll(async () => {
  await driver.sleep(1000);
  await driver.quit();
});

it('should add new movie to list', async () => {
  await addMovie(driver);
});

it('should delete movie from list', async () => {
    await deleteMovie(driver);
  });
  
it('should cross off movie on list', async () => {
    await crossOffMovie(driver);
  });