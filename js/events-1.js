console.log('Hi! sparate js file');
/*option= 2.2*/
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
/*option=3.1*/
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlue);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

/*option=3.2*/
const purpleButton= document.getElementById('make-purple');
// console.log(purpleButton);
purpleButton.onclick= function makePurple(){
    document.body.style.backgroundColor='purple';
}

/*option=4.1*/
const pinkButton= document.getElementById('make-pink');
// console.log(pinkButton);
pinkButton.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor='pink';
}

/*option=4.2*/
const greenButton= document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen(){
document.body.style.backgroundColor='green';
});