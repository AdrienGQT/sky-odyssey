import './sounds'


let triggerButton = document.querySelector('#triggerStart')

triggerButton.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
    document.getElementById('first').style.display = "none";
    body.style.overflowY = "scroll";
})

function start(){
    window.scrollTo(0, document.body.scrollHeight);
    document.getElementById('first').style.display = "none";
    body.style.overflowY = "scroll";

    // fromBottom = 0
    // setSound(audio1,'point', 0, 3000,0,0,1);
    // setSound(audio2,'point', 0, 5000,0,0,1);
    // setSound(audio3,'point', 0, 2000,0,0,1);
    // setSound(audio4,'point', 10000, 2000,0,0,1);
    // setSound(audio45,'point', 14100, 2000,0,0,1);
    // setSound(audio5,'zone', 0, 20000,23000,65000,0.4);
    // setSound(audio6,'point',46000,4000,0,0,0.25);
    // setSound(audio72,'point',60000,4000,0,0,1);
    // setSound(audio7,'point',46000,4000,0,0,1);
    // setSound(audio8,'point',53500,2000,0,0,0.5);
    // setSound(audio9,'point',8000,1000,0,0,0.15);
    // setSound(audio10,'zone',0,10000,85000,100000,1);
    // setSound(audio11,'point',26000,1000,0,0,1);
    // setSound(audio12,'point',17000,1000,0,0,1);
    // setSound(audio13,'point',17000,1000,0,0,1);
}