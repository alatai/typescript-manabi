"use strict";
const userName = 'Max';
const printOutput = (output) => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => {
        console.log(event);
        console.log('Clicked!');
    });
}
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
activeHobbies.push(...hobbies);
const person = {
    firstName: 'Max',
    age: 30,
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return (curResult += curValue);
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3, 7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);
console.log(hobby2);
console.log(remainingHobbies);
const { firstName: newName, age } = person;
//# sourceMappingURL=app.js.map