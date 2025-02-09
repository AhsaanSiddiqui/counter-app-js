// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = 'Ahsan Zafar';
// let greeting = 'Hi, my name is ';

// let myGreeting = name + greeting;
// console.log(myGreeting);

// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

// let welcomeEl = document.getElementById('welcome-el');
// let name = 'Ahsan Zafar';
// let greeting = 'Welcome back ';
// welcomeEl.innerText = greeting + name;

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment() {
  count += 1;
  // set countEl's innerText to the count
  countEl.textContent = count;
}

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph
  let countStr = count + ' - ';
  saveEl.textContent += ` ${countStr}`;
  console.log(countStr);
  countEl.textContent = 0;
  count = 0;
}
