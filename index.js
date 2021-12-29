let guzik = document.getElementById('mybutton');
guzik.addEventListener('click', showTable);

function showTable() {
  alert('Always remember to smile!');
}
let button = document.getElementById('button1');
let count = 0;
function increment() {
  count = count + 1;
  button1.innerText = count;
}

function show(anything) {
  document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function () {
  dropdown.classList.toggle('active');
};
