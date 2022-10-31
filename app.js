import data from './data.json' assert {type: 'json'};

const current = document.querySelectorAll('h3');
const previous = document.querySelectorAll('#previous');
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const selectors = document.querySelectorAll('#selector p')

selectors.forEach(selector => { //take all
    selector.addEventListener('click', function action() { //adds event listener
        daily.classList.remove('active');
        weekly.classList.remove('active');
        monthly.classList.remove('active');
        selector.classList.add('active'); //toggle class for clicked object
        period(); //starts function
    })
})

const period = () => {
    if (daily.classList.contains('active')) {
        for (let i = 0; i <= 5; i++) {
            current[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
            previous[i].innerHTML = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
        }
    } else if (weekly.classList.contains('active')) {
        for (let i = 0; i <= 5; i++) {
            current[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
            previous[i].innerHTML = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
        }
    } else {
        for (let i = 0; i <= 5; i++) {
            current[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
            previous[i].innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
        }
    }
}

window.onload = period;