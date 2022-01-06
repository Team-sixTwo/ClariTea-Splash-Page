document.addEventListener('DOMContentLoaded', () => {

// ALL MODAL TRIGGERS
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

});
// ReactDOM.render(<App />, document.getElementById('app'));