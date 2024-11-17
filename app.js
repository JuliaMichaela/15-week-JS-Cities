const content = document.querySelector('#content');
const maxT = document.querySelector('#maxtemp');
const minT = document.querySelector('#mintemp');


const cities = ['Лондон', 'Стамбул', 'Сан-Франциско', 'Осака', 'Пекин'];
let temperatures = [];

for(let i = 0; i < cities.length; i++) {
    let temperatureCity = prompt(`Введите температуру для города ${cities[i]}`, 0 )
    temperatures.push(Number(temperatureCity));

    const city = document.createElement('p');
    city.textContent = `Температура в ${cities[i]}: ${temperatureCity} °C`
    content.append(city);
}

let max = Math.max(...temperatures);
let min = Math.min(...temperatures);

maxT.textContent = `Максимальная температура: ${max} °C`;
minT.textContent = `Минимальная температура: ${min} °C`;






















