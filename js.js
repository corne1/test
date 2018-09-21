let money,
    name,
    time;

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
  open: false
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
      console.log("this is work Time really!")
      }  else if (time < 24){
          console.log ("This is time of sleep");
          } else{
            console.log ("day has a 24 hours!")
            }

}

console.log(mainlist);