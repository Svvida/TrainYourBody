const arms = document.querySelector("#armsMain");
const armsDesc = document.querySelector("#armsDesc");
const chest = document.querySelector("#chestMain");
const chestDesc = document.querySelector("#chestDesc");
const abs = document.querySelector("#absMain");
const absDesc = document.querySelector("#absDesc");
const back = document.querySelector("#backMain");
const backDesc = document.querySelector("#backDesc");
const legs = document.querySelector("#legsMain");
const legsDesc = document.querySelector("#legsDesc");

//Function to show hidden divs
function showDiv(toClick, toShow) {
	toClick.addEventListener("click", function () {
		if (toShow.style.display != "block") toShow.style.display = "block";
		else toShow.style.display = "none";
	});
}

showDiv(arms, armsDesc);
showDiv(chest, chestDesc);
showDiv(abs, absDesc);
showDiv(back, backDesc);
showDiv(legs, legsDesc);

/**************************************************/
//Scrolling to choosen element
const aboutUs = document.querySelector("#aboutUs");
const exercises = document.querySelector("#exercises");

const aboutUsSection = document.querySelector(".aboutUsSection");

function ScrollTo(from, to) {
	from.addEventListener("click", function () {
		to.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
	});
}

ScrollTo(aboutUs, aboutUsSection);
ScrollTo(exercises, arms);

/**************************************************/

//Playing audio when clicking on main photo
function audioPlay() {
	const audio = document.getElementById("manRoarAudio");
	audio.play();
}

/**************************************************/
const gallery = document.querySelectorAll(".gallery");
const imgs = document.querySelectorAll(".gallery img");
const fullpage = document.querySelector(".fullpage");

const fullPageContainer = document.createElement("div");

//Hiding full size photo
fullPageContainer.addEventListener("click", function () {
	fullPageContainer.style.display = "none";
});

//displaying full size photo
fullPageContainer.classList.add("fullpage");
document.body.appendChild(fullPageContainer);
imgs.forEach((img) => {
	img.addEventListener("click", function () {
		fullPageContainer.style.backgroundImage = "url(" + img.src + ")";
		fullPageContainer.style.display = "block";
	});
});

/**************************************************/
//Appearing elements
//Checking if element is visible
function isElementVisible(element) {
	let screen = element.getBoundingClientRect();
	return (
		screen.top >= 0 &&
		screen.left >= 0 &&
		screen.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		screen.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

//Adding class "ElementAppear" to all elements with class "toShow"
const elementsToShow = document.querySelectorAll(".toShow");
elementsToShow.forEach(function (element) {
	window.addEventListener("scroll", function () {
		if (isElementVisible(element)) {
			element.classList.add("ElementAppear");
		}
	});
});
