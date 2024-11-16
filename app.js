const cities = ['Лондон', 'Стамбул', 'Сан-Франциско', 'Осака', 'Пекин'];
const temperatures = [];

for(let i = 0; i < cities.length; i++) {
    let temperatureCity = prompt(`Введите температуру для города ${cities[i]}`, 0 )
    temperatures.push(Number(temperatureCity));
    
}


console.log(temperatures)



















// let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
// let result = '';
// let alphabetLength = alphabet.length;
// for (let i = 0; i<alphabetLength; i++) {
//    if (result.length <=5)
//    result += alphabet.charAt(Math.floor(Math.random()*alphabetLength));

// }

// console.log (result)

// let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
// const generateRandomString = (length) => {
//     let result = ''
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * alphabet.length)
//         result += alphabet[randomIndex]
//     }
//     return result
// };
// const randomString = generateRandomString(6)
// console.log(randomString)