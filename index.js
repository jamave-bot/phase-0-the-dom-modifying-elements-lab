// Write your code here!
const main = document.getElementById('main');
main.remove();

const h1 = document.createElement('h1');
h1.setAttribute('id','victory');

document.body.appendChild(h1);

const newHeader = document.querySelector("h1#victory");
h1.appendChild(document.createTextNode("Socks is the champion"));