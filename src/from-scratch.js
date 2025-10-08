const measureRain = (inches) => {
  if (inches === 0) {
    return "drought"
  } else if (inches < 2 && inches > 0) {
    return "dry"
  } else if (inches < 4 && inches > 1) {
    return "averge"
  } else if (inches < 6 && inches >= 4) {
    return "rainy"
  } else {
    return "flood"
  }
};

const happyBirthdayPet = (breed, age) => {
  if (breed === "snake" && age <= Infinity) {
    return 'Hiss hiss!'
  } else if (breed === "cat" && age < 5) {
    return 'Mew mew!'
  } else if (breed === "cat" && age >= 5) {
    return 'Meow meow!'
  } else if (breed === "dog" && age < 5) {
    return 'Arf arf!'
  } else if (breed === "dog" && age >= 5 && age < 10) {
    return 'Woof woof!'
  } else if (breed === "dog" && age >= 10) {
    return 'Boof!'
  } else {
    return 'Happy birthday!'
  }
};

const funTypes = (jsType) => {
  if (typeof jsType === "string") {
    return "That's just some text."
  } else if (typeof jsType === "number" && jsType <= Infinity) {
    return "That's a good number."
  } else if (typeof jsType === "boolean") {
    return "To bool, or not to bool?"
  } else if (typeof jsType === "undefined") {
    return "Nothing, but I didn't set that."
  } else if (jsType === null) {
    return "Nothing, and I did set that."
  } else if (typeof jsType === "object" && Array.isArray(jsType) !== true) {
    return "Anybody got the key?"
  } else if (Array.isArray(jsType) === true) {
    return "I order you to be indexed."
  } else if (Number.isNaN(jsType) === true) {
    return "Well, now you're just showing off."
  }
};

const rounder = (float, roundSetting) => {
  let roundUp = Math.ceil(float)
  let roundDown = Math.floor(float)
  let honest = Math.round(float)
  if (roundSetting === "up") {
    return roundUp
  } else if (roundSetting === "down") {
    return roundDown
  } else if (roundSetting === "honest") {
    return honest
  }
};

const formatName = (first, last) => {
  let firstName = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase()
  let lastName = last.charAt(0).toUpperCase() + last.slice(1).toLowerCase()
  return firstName + " " + lastName
};

const extractDomain = (email) => {
  const charater = "@"
  const aLine = email.indexOf(charater)
  return email.slice(aLine + 1)
};

const startsWithVowel = (str) => {
  const firstChar = str[0].toLowerCase()
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(firstChar)) {
    return true
  } else {
    return false
  }
};

const rotate = (str, num) => {
  let myArray = str.split("")

  for (i = 0; i < num; i++) {
    let move = myArray.pop()
    myArray.unshift(move)

  }
  return myArray.join("")
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
