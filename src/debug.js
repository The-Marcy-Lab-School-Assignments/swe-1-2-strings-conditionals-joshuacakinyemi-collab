const coolnessGauge = (numOfFridges) => {
  return numOfFridges > 5 ? 'You are downright chilly!' : 'You need more fridges.';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    return 'No pops? Maybe try one.';
  } else if (numOfFunkoPops >= 1 && numOfFunkoPops <= 10) {
    return 'Only a few? Keep having fun!';
  } else if (numOfFunkoPops > 10 && numOfFunkoPops < 20) {
    return 'You have a problem.';
  } else if (numOfFunkoPops > 20 && numOfFunkoPops < 30) {
    return 'You need help!';
  } else {
    return 'You need an intervention!!!';
  }
};

const returnPositiveNegativeZero = (num) => {
  return num > 0 ? 'Positive' : num === 0 ? 'Zero' : 'Negative';
};

module.exports = {
  coolnessGauge,
  funkoPopAddictionLevel,
  returnPositiveNegativeZero,
};
