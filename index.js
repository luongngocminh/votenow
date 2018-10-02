console.log("hello world");

const search_bar = document.querySelector('#search_bar');
const list_element = document.querySelector('.list');
const message = document.querySelector('#message');
var picked_id = NaN;


//Vứt data vào đây plz
const fake_data = [
  {
    "id": 0006,
    "name": "Luong Minh"
  },
  {
    "id":231,
    "name": "Hieu"
  },
  {
    "id": 5,
    "name": "Luong Mi"
  },
  {
    "id":21,
    "name": "Hu"
  },
  {
    "id": 0030,
    "name": "Long"
  },
  {
    "id":2100,
    "name": "Ba"
  }
];


search_bar.onkeyup = (e) => {
  console.log(search_bar.value);
  list_element.innerHTML = "";
  render_list(search_bar.value);
}



var render_list = (name) => {

  fake_data.forEach(card => {
    if (card.name.toLowerCase().includes(name.toLowerCase())) {
      const div = document.createElement('div');
      const name = document.createElement('h4');

      name.textContent = "➺ "+card.name;
      div.id = card.id;
      div.className = "name_card";
      div.appendChild(name);
      list_element.appendChild(div);
    }

  })
}
render_list("");
const card_elements = document.getElementsByClassName('name_card');
// console.log(card_elements);
for (var i=0;i<card_elements.length;i++) {
  card_elements[i].addEventListener('click', redirect, false);
}

function redirect(ev) {
  picked_id = ev.target.id;
  picked(picked_id);
}

var picked = (id) => {
  const picked_element = document.getElementById(id);
  for (var j=0;j<card_elements.length;j++) {
    card_elements[j].style["border-color"] = "#dedede";
  };
  picked_element.style["border-color"] = "green";
  var name = picked_element.childNodes[0].innerHTML.split('➺ ')[1];
  message.innerHTML = "Bạn Vote cho " + name;
  document.getElementById('submit-btn').disabled = false;
  document.getElementById('submit-btn').className = "button-primary";
}
