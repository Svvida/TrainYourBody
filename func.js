const arms = document.querySelector("#armsMain");
const armsDesc = document.querySelector(".armsDesc");
const chest = document.querySelector("#chestMain");
const chestDesc = document.querySelector(".chestDesc");
const abs = document.querySelector("#absMain");
const absDesc = document.querySelector(".absDesc");
const back = document.querySelector("#backMain");
const backDesc = document.querySelector(".backDesc");
const legs = document.querySelector("#legsMain");
const legsDesc = document.querySelector(".legsDesc");

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

//Playing audio when clicking on p
function audioPlay() {
	const audio = document.getElementById("manRoarAudio");
	audio.play();
}

/**************************************************/
const imgs = document.querySelectorAll(".gallery img");
const fullPage = document.querySelector(".fullpage");

imgs.forEach((img) => {
	img.addEventListener("click", function () {
		fullPage.style.backgroundImage = "url(" + img.src + ")";
		fullPage.style.display = "block";
	});
});

//Hiding full size photo
fullPage.addEventListener("click", function () {
	this.style.display = "none";
});
