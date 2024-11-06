//Use query Selectors to get the class of all the button shapes
const redLight = document.querySelector('.red-light');
const yellowLight = document.querySelector('.yellow-light');
const greenLight = document.querySelector('.green-light');
const offLight = document.querySelector('.off-light');
const onLight = document.querySelector('.on-light');
//Use getElementById which allows us to get the ID so that we can add an event listener to the buttons, listen for a click and then set the color via css properties.
const redSwitch = document.getElementById('red-switch');
const yellowSwitch = document.getElementById('yellow-switch');
const greenSwitch = document.getElementById('green-switch');
const offSwitch = document.getElementById('off-switch');
const onSwitch = document.getElementById('on-switch');
//Add event listeners that listen for a button click
redSwitch.addEventListener('click', () => {
    redLight.style.backgroundColor = 'red';

});
yellowSwitch.addEventListener('click', () => {
    yellowLight.style.backgroundColor = 'yellow';

});
greenSwitch.addEventListener('click', () => {
   greenLight.style.backgroundColor = 'green';

});
//Turn all lights on and off with their specific buttons
offSwitch.addEventListener('click', () => {
    redLight.style.backgroundColor = 'grey';
    yellowLight.style.backgroundColor = 'grey';
    greenLight.style.backgroundColor = 'grey';
})
    onSwitch.addEventListener('click', () => {
        redLight.style.backgroundColor = 'red';
        yellowLight.style.backgroundColor = 'yellow';
        greenLight.style.backgroundColor = 'green';
    

});
//Party Mode Button

//Turn all lights on and off at once with a single button