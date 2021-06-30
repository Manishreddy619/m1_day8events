/* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

let mainTitle = document.querySelector('h1');

const changeTitle = function (newtitle) {
	newtitle = 'This title has been changed';
	mainTitle.innerText = newtitle;
};
// mainTitle.onclick = changeTitle;
mainTitle.addEventListener('click', changeTitle);

/* EXERCISE 2
      Write a function for changing the class of the title of the page in "myHeading".
      */

const addClassToTitle = function () {
	mainTitle.classList.add('myHeading');
	//
};
mainTitle.addEventListener('click', addClassToTitle);

/* EXERCISE 3
      Write a function for changing the text of only the p which are children of a div.
      */
let divPara = document.querySelectorAll('p')[0];
// console.log(divPara);
const changePcontent = function () {
	//
	divPara.innerHTML = '<h2>This para is modified to header 2 </h2>';
};
divPara.addEventListener('mouseover', changePcontent);
/* EXERCISE 4
      Write a function for changing the destination of every link to https://www.google.com
      */

const changeUrls = function () {};

/* EXERCISE 5
       Write a function for adding a new item in the second list.
       */
let parent = document.getElementById('secondList');
console.log(secondList);
const addToTheSecond = function (content) {
	content = '4th item';
	let element = document.createElement('li');
	element.id = 'new-member';
	element.innerHTML = content;
	document.getElementById('secondList').appendChild(element);
};
parent.onclick = addToTheSecond;

/* EXERCISE 6
      Write a function for adding a second paragraph to the div.
      */
let parentDiv = document.querySelectorAll('div')[0];
console.log(parentDiv);

const addParagraph = function (content) {
	//
	content = 'This new paragraph  just now added';
	let element = document.createElement('p');
	element.id = 'para';
	element.innerHTML = content;
	document.querySelectorAll('div')[0].appendChild(element);
};
document.querySelector('body').ondblclick = addParagraph;
/* EXERCISE 7
      Write a function for making the first UL disappear.
      */
let firstUl = document.querySelectorAll('ul')[0];
let secondUl = document.querySelectorAll('ul')[1];
console.log(firstUl);
const firstUlDisappear = function () {
	//
	firstUl.remove();
};
secondUl.onclick = firstUlDisappear;
// firstUlDisappear();
/* EXERCISE 8
      Write a function for making the background of every UL green.
      */
let everyUl = document.querySelectorAll('ul');
console.log(everyUl);
const paintItGreen = function () {
	for (let ul of everyUl) {
		ul.style.backgroundColor = 'green';
	}
};
everyUl[0].ondblclick = paintItGreen;

/* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
      */
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
let myclick = Document.querySelector('body');
const makeItClickable = function () {
	//
	Document.querySelector('body').style.backgroundColor = `${getRandomColor()}`;
};
myclick.onclick = makeItClickable;
/* EXERCISE 10
      Change the footer text with something else when the user clicks on it.
      */

const changeFooterText = function () {
	//
};

/* EXERCISE 11
      Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */

const inputField = document.getElementById('input-field');
// ...

/* EXERCISE 12
      Create a new welcome alert message when the page successfully loads.
      */

window.onload = function () {
	//
};

/* EXERCISE 13
      Use HTML5 tags to divide the content of the page in a more semantic way.
      */
!(function () {
	let e = !1;
	function n() {
		if (!e) {
			const n = document.createElement('meta');
			(n.name = 'dapp-detected'), document.head.appendChild(n), (e = !0);
		}
	}
	if (window.hasOwnProperty('ethereum')) {
		if (
			((window.__disableDappDetectionInsertion = !0),
			void 0 === window.ethereum)
		)
			return;
		n();
	} else {
		var t = window.ethereum;
		Object.defineProperty(window, 'ethereum', {
			configurable: !0,
			enumerable: !1,
			set: function (e) {
				window.__disableDappDetectionInsertion || n(), (t = e);
			},
			get: function () {
				if (!window.__disableDappDetectionInsertion) {
					const e = arguments.callee;
					(e &&
						e.caller &&
						e.caller.toString &&
						-1 !== e.caller.toString().indexOf('getOwnPropertyNames')) ||
						n();
				}
				return t;
			},
		});
	}
})();
