import './styles.scss';
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App.jsx"

//modal
const modalBG = document.querySelector('.modal-background');

//Connect Modal Button Trigger
const connectbtn = document.querySelector('#connectBtn');
const connectbg = document.querySelector('#connectBG');
const connectmodal = document.querySelector('#connectModal');
connectbtn.addEventListener('click', () => {
    connectmodal.classList.add('is-active');
});
connectbg.addEventListener('click', () => {
    connectmodal.classList.remove('is-active');
});

//Schema Modal Button Trigger
const schemabtn = document.querySelector('#schemaBtn');
const schemabg = document.querySelector('#schemaBG');
const schemamodal = document.querySelector('#schemaModal');

schemabtn.addEventListener('click', () => {
    schemamodal.classList.add('is-active');
});
schemabg.addEventListener('click', () => {
    schemamodal.classList.remove('is-active');
});

//Visualization Modal Button Trigger

const vizbtn = document.querySelector('#vizBtn');
const vizbg = document.querySelector('#vizBG');
const vizmodal = document.querySelector('#vizModal');

vizbtn.addEventListener('click', () => {
    vizModal.classList.add('is-active');
});
vizbg.addEventListener('click', () => {
    vizmodal.classList.remove('is-active');
});

//Replication Modal Button Trigger

const repbtn = document.querySelector('#repBtn');
const repbg = document.querySelector('#repBG');
const repmodal = document.querySelector('#repModal');

repbtn.addEventListener('click', () => {
    repmodal.classList.add('is-active');
});
repbg.addEventListener('click', () => {
    repmodal.classList.remove('is-active');
});


ReactDOM.render(<App />, document.getElementById('app'));