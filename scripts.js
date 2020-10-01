const vingette =  document.getElementById('cover');
const hamiltonText = document.getElementById('hamiltonText');
const birthday = document.getElementById('birthday');
const rose = document.getElementById('rose');
const message = document.getElementById('message');

setTimeout(() => vingette.classList.add('entered'), 500);
setTimeout(() => hamiltonText.classList.add('entered'), 1500);
setTimeout(() => hamiltonText.classList.add('swap'), 3000);
setTimeout(() => birthday.classList.add('entered'), 3500);
setTimeout(() => rose.classList.add('entered'), 4000);
setTimeout(() => message.classList.add('entered'), 5000);