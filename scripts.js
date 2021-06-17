/*

// References the div content
var contentPara = document.querySelector('.content');

// Highlights tabs
var tabs = document.querySelectorAll('nav a');

document.querySelector('nav a').classList.add('active');

// Initiallize our page using innerHTML

contentPara.innerHTML = data.recipes;

tabs.forEach((tab) => tab.addEventListener('click', makeActive));

function makeActive(event) {
  makeInactive();
  event.target.classList.add('active');
  //event.preventDefault();
}

// Creates single page application

function makeActive(event) {
  console.log(event.target);
  if (!event.target.matches('a')) return; // NEW
  makeInactive();
  event.target.classList.add('active');
  if (event.target.href.includes('recipes')) {
    contentPara.innerHTML = data.recipes;
  } else if (event.target.href.includes('reviews')) {
    contentPara.innerHTML = data.reviews;
  } else if (event.target.href.includes('delivery')) {
    contentPara.innerHTML = data.delivery;
  }
  event.preventDefault();
}

function makeActive(event) {
  if (!event.target.matches('a')) return;
  makeInactive();
  event.target.classList.add('active');
  const type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];
  let activePage = document.querySelector('.active');
  let storyRef = activePage.dataset.story;
  contentPara.innerHTML = data[storyRef];
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'));
}

// Uses another event listener hashchange

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];
}

function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'recipes';
    document.querySelector('[href="#recipes"]').classList.add('active');
  } else {
    document
      .querySelector(`[href="${window.location.hash}"]`)
      .classList.add('active');
  }
  setContentAccordingToHash();
}

document.addEventListener('click', makeActive);
window.addEventListener('hashchange', setContentAccordingToHash);

initializePage();

/*
// Gets the page contents based on the address in the browser's address bar


console.log(window.location);
var type = window.location.hash;
// var type = window.location.hash.substring(1);
console.log(type);


*/

/*
var tabs = document.querySelectorAll('nav a');
contentPara = document.querySelector('.content');

//tabs.forEach((tab) => tab.addEventListener('click', makeActive))

function makeActive(event) {
  if (!event.target.matches('nav a')) return;
  makeInactive();
  event.target.classList.add('active');
}
//event.preventDefault() - dont need to prevent degault because doesnt have pages that nagivate away. hash routing.

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'));
}

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];
}



function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'recipes';
    document.querySelector('[href="#recipes"]').classList.add('active');
  } else {
    document
      .querySelector(`[href="${window.location.hash}]"`)
      .classList.add('active');
  }
  setContentAccordingToHash();
}

document.addEventListener('click', makeActive);

window.addEventListener('hashchange', setContentAccordingToHash);

initializePage();

// Variables with content for tab pages

var recipes =
  '<h1>Recipes</h1> <p>Chantilly vulture pole vault bracelet kestrel rushing scrapbook get into logo caffeine korea penny shakespeare hailstorm Albrecht Durer October polka dot arrow legato Kentucky knopf theremin ghost racetrack rising.</p>';

var reviews =
  '<h1>Reviews</h1> <p>Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.</p>';

var delivery =
  '<h1>Delivery</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.</p>';
*/

// hash
var tabs = document.querySelectorAll('nav a');
contentPara = document.querySelector('.content');

// when the hash changes
function setActiveTabAccordingToHash(type) {
  makeAllTabsInactive();
  var tabToActivate = document.querySelector(`a[href="#${type}"]`);
  tabToActivate.classList.add('active');
}

function makeAllTabsInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'));
}

// runs on page load and whenever the hash changes
function setContentAccordingToHash() {
  var type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];

  setActiveTabAccordingToHash(type);
}

// only runs once on page load
function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'recipes';
    document.querySelector('[href="#recipes"]').classList.add('active');
  }
  setContentAccordingToHash();
}

window.addEventListener('hashchange', setContentAccordingToHash);

initializePage();
