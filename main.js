const refresh = () => {
    // Get Elements
    let myLifepoints = document.getElementById('my-lp');
    let opponentLifepoints = document.getElementById('opponent-lp');
    let myProgress = document.getElementById('my-lp-progress');
    let opponentProgress = document.getElementById('opponent-lp-progress');
    let calcVal = document.getElementById('calc-val');
    //Set Elements
    myLifepoints.innerText ='8000';
    opponentLifepoints.innerText ='8000';
    myProgress.value = 8000;
    opponentProgress.value = 8000;
    calcVal.innerText = '';
};

const updateValue = (num) => {
    let calcVal = document.getElementById('calc-val');
    calcVal.innerText = calcVal.innerText.concat(num);
    if(Number(calcVal.innerText) === 0) {
        calcVal.innerText = '';
    }
};

const myLoss = () => {
    let audio = new Audio("lose.mp3");
    audio.play();
    let myLifepoints = document.getElementById('my-lp');
    let calcVal = document.getElementById('calc-val');
    let myProgress = document.getElementById('my-lp-progress');
    if(Number(calcVal.innerText) === 0) {
        //do nothing
    } else {
        let difference = Number(myLifepoints.innerText) - Number(calcVal.innerText);
        if (difference > 2000) {
            myProgress.className = "progress is-warning";
        } else {
            myProgress.className = "progress is-danger";
        } 
        if (difference <= 0) {
            myLifepoints.innerText = 0;
            myProgress.value = 0;
        } else {
            myLifepoints.innerText = difference;
            myProgress.value = difference;
        }
        calcVal.innerText = '';
    }
};

const opponentLoss = () => {
    let audio = new Audio("lose.mp3");
    audio.play();
    let opponentLifepoints  = document.getElementById('opponent-lp');
    let calcVal = document.getElementById('calc-val');
    let opponentProgress = document.getElementById('opponent-lp-progress');
    if(Number(calcVal.innerText) === 0) {
        //do nothing
    } else {
        let difference = Number(opponentLifepoints.innerText) - Number(calcVal.innerText);
        if (difference > 2000) {
            opponentProgress.className = "progress is-warning";
        } else {
            opponentProgress.className = "progress is-danger";
        } 
        if (difference < 0) {
            opponentLifepoints.innerText = 0;
            opponentProgress.value = 0;
        } else {
            opponentLifepoints.innerText = difference;
            opponentProgress.value = difference;
        }
        calcVal.innerText = '';
    }
};

const myGain = () => {
    let audio = new Audio("gain.mp3");
    audio.play();
    let myLifepoints = document.getElementById('my-lp');
    let calcVal = document.getElementById('calc-val');
    let myProgress = document.getElementById('my-lp-progress');
    let sum = Number(myLifepoints.innerText) + Number(calcVal.innerText);
    if (sum > 2000 && sum < 4000) {
        myProgress.className = "progress is-warning";
    } else if (sum > 4000) {
        myProgress.className = "progress is-success";
    } 
    myLifepoints.innerText = sum;
    myProgress.value = sum;
    calcVal.innerText = '';
};

const opponentGain = () => {
    let audio = new Audio("gain.mp3");
    audio.play();
    let opponentLifepoints  = document.getElementById('opponent-lp');
    let calcVal = document.getElementById('calc-val');
    let opponentProgress = document.getElementById('opponent-lp-progress');
    let sum = Number(opponentLifepoints.innerText) + Number(calcVal.innerText);
    if (sum > 2000 && sum < 4000) {
        opponentProgress.className = "progress is-warning";
    } else if (sum > 4000) {
        opponentProgress.className = "progress is-success";
    } 
    opponentLifepoints.innerText = sum;
    opponentProgress.value = sum;
    calcVal.innerText = '';
};

const rollDice = () => {
    let dice = document.getElementById('dice');
    let result =  1 + Math.floor(Math.random() * 6);
    dice.innerHTML = `&nbsp<strong>` + result + `</strong>`;
};

const flipCoin = () => {
    let coin = document.getElementById('coin');
    let x = (Math.floor(Math.random() * 2) == 0);
    if(x){
    	coin.innerHTML = `&nbsp<strong> HEADS </strong>`;
    }else{
        coin.innerHTML = `&nbsp<strong> TAILS </strong>`;
    } 
}

const clearCalc = () => {
    let calcVal = document.getElementById('calc-val');
    calcVal.innerText = '';
};

document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
      var $notification = $delete.parentNode;
  
      $delete.addEventListener('click', () => {
        $notification.parentNode.removeChild($notification);
      });
    });
  });