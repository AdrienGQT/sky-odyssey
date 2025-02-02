// Landing
var audio1 = new Audio("audio/birds-ambient.wav");
var audio2 = new Audio("audio/mountain-ambient.wav");
var audio3 = new Audio("audio/nature-ambient.mp3");
// Boeing
var audio4 = new Audio("audio/boeing.wav");
var audio45 = new Audio("audio/boeing.wav");
// High wind
var audio5 = new Audio("audio/high-wind.mp3");
// SpaceShuttle
var audio6 = new Audio("audio/space-shuttle.mp3");
// Rocket
var audio7 = new Audio("audio/rocket.wav");
var audio72 = new Audio("audio/rocket.wav");
// Sprites
var audio8 = new Audio("audio/sprites.mp3");
// Zepellin
var audio9 = new Audio("audio/zepellin.mp3");
// White noise
var audio10 = new Audio("audio/white-noise.wav");
// Jet
var audio11 = new Audio("audio/jet1.mp3");
var audio12 = new Audio("audio/jet2.mp3");
// Concorde
var audio13 = new Audio("audio/concorde.mp3");

var audios = [
  audio1,
  audio2,
  audio3,
  audio4,
  audio5,
  audio6,
  audio7,
  audio8,
  audio9,
  audio10,
  audio11,
  audio12,
  audio13,
];

var fromBottom;

window.onload = () => {
  for (var i = 0; i < audios.length; i++) {
    audios[i].play();
    audios[i].loop = true;
    audios[i].volume = 0;
  }
};

document.addEventListener("scroll", () => {
  fromBottom = height - window.scrollY - window.innerHeight;
  setSound(audio1, "point", 0, 3000, 0, 0, 1);
  setSound(audio2, "point", 0, 5000, 0, 0, 1);
  setSound(audio3, "point", 0, 2000, 0, 0, 1);
  setSound(audio4, "point", 10000, 2000, 0, 0, 1);
  setSound(audio45, "point", 14100, 2000, 0, 0, 1);
  setSound(audio5, "zone", 0, 20000, 23000, 65000, 0.4);
  setSound(audio6, "point", 46000, 4000, 0, 0, 0.25);
  setSound(audio72, "point", 60000, 4000, 0, 0, 1);
  setSound(audio7, "point", 46000, 4000, 0, 0, 1);
  setSound(audio8, "point", 53500, 2000, 0, 0, 0.5);
  setSound(audio9, "point", 8000, 1000, 0, 0, 0.15);
  setSound(audio10, "zone", 0, 10000, 85000, 100000, 1);
  setSound(audio11, "point", 26000, 1000, 0, 0, 1);
  setSound(audio12, "point", 17000, 1000, 0, 0, 1);
  setSound(audio13, "point", 17000, 1000, 0, 0, 1);
});

function setSound(audio, type, altitude, range, startMax, endMax, volMax) {
  if (type == "point") {
    let start = altitude - range;
    let end = altitude + range;

    if (fromBottom > start && fromBottom < altitude) {
      audio.play();
      audio.volume = ((fromBottom - start) / range) * volMax;
    } else if (fromBottom > altitude && fromBottom < end) {
      audio.play();
      audio.volume = ((-fromBottom + altitude) / range + 1) * volMax;
    } else if (fromBottom == altitude) {
      audio.volume = 1 * volMax;
    } else {
      audio.volume = 0;
      audio.pause();
      audio.currentTime = 0;
    }
  } else if (type == "zone") {
    let start = startMax - range;
    let end = endMax + range;

    if (fromBottom > start && fromBottom < startMax) {
      audio.play();
      audio.volume = (fromBottom - start) / range;
    } else if (fromBottom > endMax && fromBottom < end) {
      audio.play();
      audio.volume = (-fromBottom + endMax) / range + 1;
    } else if (fromBottom >= startMax && fromBottom <= endMax) {
      audio.volume = 1;
    } else {
      audio.volume = 0;
      audio.pause();
      audio.currentTime = 0;
    }
  }
}
