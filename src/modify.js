const wildlyBiasedReview = (location, rate) => {
  if (location !== 'NYC') {
    return "Yea that place is cool I guess";
  }
  if (rate === 1) {
    return "WOW WHAT A CITY"
  }
  if (rate === 2) {
    return "THE CITY THAT NEVER SLEEPS"
  } else {
    return "THE GREATEST CITY IN THE WORLD";
  }
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
};

module.exports = {
  wildlyBiasedReview,
  getWeatherReport,
};

wildlyBiasedReview("NYC")