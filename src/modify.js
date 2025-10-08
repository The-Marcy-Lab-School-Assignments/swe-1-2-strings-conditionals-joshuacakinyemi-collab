const wildlyBiasedReview = (location) => {
  if (location !== 'NYC') {
    console.log("Yea that place is cool I guess")
  }
  if (location === 'NYC')
    console.log('THE GREATEST CITY IN THE WORLD');
  console.log('THE CITY THAT NEVER SLEEPS');
  console.log('WOW WHAT A CITY');
};

const getWeatherReport = (temperature) => {
  let weatherReport;
  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
  } else if (temperature > 70) {
    weatherReport = "It's really nice!";
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
  }
  console.log(`${weatherReport} And that's you report!`)
  return weatherReport
};

module.exports = {
  wildlyBiasedReview,
  getWeatherReport,
};

wildlyBiasedReview("NYC")