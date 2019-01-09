import {
  choice,
  remove
} from './arrayHelpers.js';
import {
  fruit
} from './foods.js';

let randomFruit = choice(fruit);


console.log('I\'d like one random fruit please');
console.log(`Here you go: ${randomFruit}`);
console.log('Delicious! May I have another?');
remove(fruit, randomFruit);
console.log(`I'm sorry, we are all out. We have ${fruit.length} fruits remaining.`);
console.log(fruit);