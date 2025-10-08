const measureRain = (inches) => {
  if (inches === 0) {
    console.log('drought')
  } else if (inches < 2 && inches > 0) {
    console.log('dry')
  } else if (inches < 4 && inches > 2) {
    console.log('averge')
  } else if (inches < 6 && inches > 4) {
    console.log('rainy')
  } else {
    console.log('flood')
  }
};

const happyBirthdayPet = (breed, age) => {
  if (breed === "snake" && age <= Infinity) {
    console.log('Hiss hiss')
  } else if (breed === "cat" && age < 5) {
    console.log('Mew mew!')
  } else if (breed === "cat" && age >= 5) {
    console.log('Meow meow!')
  } else if (breed === "dog" && age < 5) {
    console.log('Arf arf!')
  } else if (breed === "dog" && age >= 5 && age < 10) {
    console.log('Woof woof!')
  } else if (breed === "dog" && age >= 10) {
    console.log('Boof!')
  } else {
    console.log('Happy birthday')
  }
};

const funTypes = (jsType) => {
  if (typeof jsType === "string") {
    console.log("That's just some text.")
  } else if (typeof jsType === "number" && jsType <= Infinity) {
    console.log("That's a good number.")
  } else if (typeof jsType === "boolean") {
    console.log("To bool, or not to bool?")
  } else if (typeof jsType === "undefined") {
    console.log("Nothing, but I didn't set that.")
  } else if (jsType === null) {
    console.log("Nothing, and I did set that.")
  } else if (typeof jsType === "object" && Array.isArray(jsType) !== true) {
    console.log("Anybody got the key?")
  } else if (Array.isArray(jsType) === true) {
    console.log("I order you to be indexed.")
  } else if (Number.isNaN(jsType) === true) {
    console.log("Well, now you're just showing off.")
  }
};

const rounder = (float, roundSetting) => {
  let roundUp = Math.ceil(float)
  let roundDown = Math.floor(float)
  let honest = Math.round(float)
  if (roundSetting === "up") {
    console.log(roundUp)
  } else if (roundSetting === "down") {
    console.log(roundDown)
  } else if (roundSetting === "honest") {
    console.log(honest)
  }
};

const formatName = (first, last) => {
  let firstName = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase()
  let lastName = last.charAt(0).toUpperCase() + last.slice(1).toLowerCase()
  console.log(firstName + " " + lastName)
};

const extractDomain = (email) => {
  const charater = "@"
  const aLine = email.indexOf(charater)
  console.log(email.slice(aLine + 1))
};

const startsWithVowel = (str) => {
  const firstChar = str[0].toLowerCase()
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(firstChar)) {
    console.log("true")
  } else {
    console.log("false")
  }
};

const rotate = (str, num) => {
  let myArray = str.split("")

  for (i = 0; i < num; i++) {
    let move = myArray.shift()
    myArray.push(move)

  }
  console.log(myArray.join(""))
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
