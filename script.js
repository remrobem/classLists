const grandparent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

console.log('-------------------------');
gp_log()

grandparent.classList.add('dummy2');
grandparent.classList.remove('dummy');

console.log('---------after add and remove----------------');
gp_log()

grandparent.classList.contains('dummy2')
  ? grandparent.classList.replace('dummy2', 'dummy')
  : grandparent.classList.add('dummy3');

console.log('------after replace-------------------');
gp_log()

setTimeout(() => {
  parent.classList.toggle('yellow');
}, 5000);

parent.classList.toggle('yellow');

let test = false;

setTimeout(() => {
  child.classList.toggle('red', test);
}, 3000);

function gp_log() {
  console.log('grandparent');
  console.log('classList: ', grandparent.classList);
  console.log('classList[0]: ', grandparent.classList[0]);
  console.log('classList[1]: ', grandparent.classList[1]);
  console.log('.value: ', grandparent.classList.value);
  console.log('-------------------------');
};
