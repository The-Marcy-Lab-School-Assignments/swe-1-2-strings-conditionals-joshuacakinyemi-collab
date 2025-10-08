const wildlyBiasedReview = (location) => {
  if (location !== 'NYC') {
    return "Yea that place is cool I guess"
  }
  if (location === 'NYC')
    return 'THE GREATEST CITY IN THE WORLD' + ", " + 'THE CITY THAT NEVER SLEEPS' + ", " + 'WOW WHAT A CITY';
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
  return `${weatherReport} And that's you report!`
};

module.exports = {
  wildlyBiasedReview,
  getWeatherReport,
};

wildlyBiasedReview("NYC")