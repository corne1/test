let money,
    name,
    time,
    price;

function start() {
    money = prompt("Your Bank?");
    while (isNaN(money) || money == "" || money == null || money == " "){
      money = prompt("Your Bank?");
    }
    name = prompt("Name of your market?").toUpperCase();
    time = 21;
}

//start();

let mainlist = {
  budzhet: money,
  shopname: name,
  shopgoods: [],
  employers:{},
  open: false,
  discount: false
}

function chooseGoods() {
  for (let i = 0; i < 3; i++) {
    let a = prompt("Which type of tovar you will be sell?");

    if ((typeof (a)) === 'string' && (typeof (a) != null && a != '' && a.length < 50)) {
      console.log("Absolute true, man!");
      mainlist.shopgoods[i] = a;
    } else {
      i = i - 1;
    }
  }
}
//chooseGoods();

function workTime(time) {
  if (time < 0){
    console.log("Peace of shit!");
  } else if (time > 8 && time < 20 ){
      console.log("this is time to work really!!")
      }  else if (time < 24){
          console.log ("This is time of sleep");
          } else{
            console.log ("day has a 24 hours!")
            }

}
//workTime(18);

function bank() { 
  alert("Ежедневный бюджет: " + mainlist.budzhet / 30);
}

//bank();

function getPrice() {
  var option = prompt("Введите сумму: " + price);
  mainlist.discount = true;
  var lostOfPrise = option * 0.8;
  alert("Дисконтная система: " + lostOfPrise);
}

//getPrice(); 

let employersName,
    i;



function employers() {
  for (let i = 1; i <= 4 ; i++){
    var employersName = prompt("Сотрудник номер " + [i] + " Имя Сотрудника: ");
    var employersList = {
      id: i,
      name: employersName
    }
    console.log(employersList);
  }
  
}
employers();


//console.log(mainlist);


