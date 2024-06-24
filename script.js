const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const result = document.getElementById("output");

function run(){
  if(!input.value){
    result.textContent = "Please enter a valid number";
  }
  else if(input.value <=0){
    result.textContent = "Please enter a number greater than or equal to 1";
  }
  else if(input.value >=4000){
    result.textContent = "Please enter a number less than or equal to 3999";
  }
  else{
    if(input.value <11){
      switch(input.value){
        case "1":result.textContent = "I";
        break;
        case "2":result.textContent = "II";
        break;
        case "3":result.textContent = "III";
        break;
        case "4":result.textContent = "IV";
        break;
        case "5":result.textContent = "V";
        break;
        case "6":result.textContent = "VI";
        break;
        case "7":result.textContent = "VII";
        break;
        case "8":result.textContent = "VIII";
        break;
        case "9":result.textContent = "IX";
        break;
        case "10":result.textContent = "X";
        break;
      }   
    }else if(input.value >10 && input.value <=100){
        const secondNum = parseInt(input.value / 10) ;
        const firstNum = input.value % 10;
      switch(secondNum){
        case 1:result.textContent = "X";
        break;
        case 2:result.textContent = "XX";
        break;
        case 3:result.textContent = "XXX";
        break;
        case 4:result.textContent = "XL";
        break;
        case 5:result.textContent = "L";
        break;
        case 6:result.textContent = "LX";
        break;
        case 7:result.textContent = "LXX";
        break;
        case 8:result.textContent = "LXXX";
        break;
        case 9:result.textContent = "XC";
        break;
        case 10:result.textContent = "C";
        break;
      }
       switch(firstNum){
        case 1:result.textContent += "I";
        break;
        case 2:result.textContent += "II";
        break;
        case 3:result.textContent += "III";
        break;
        case 4:result.textContent += "IV";
        break;
        case 5:result.textContent += "V";
        break;
        case 6:result.textContent += "VI";
        break;
        case 7:result.textContent += "VII";
        break;
        case 8:result.textContent += "VIII";
        break;
        case 9:result.textContent += "IX";
        break;
      }
    }
    else if(input.value >100 && input.value <=1000){
      const thirdNum = parseInt(input.value / 100);
      const secondNum = parseInt((input.value-thirdNum*100) / 10);
      const firstNum = (input.value % 100) % 10;
      switch(thirdNum){
        case 1:result.textContent = "C";
        break;
        case 2:result.textContent = "CC";
        break;
        case 3:result.textContent = "CCC";
        break;
        case 4:result.textContent = "CD";
        break;
        case 5:result.textContent = "D";
        break;
        case 6:result.textContent = "DC";
        break;
        case 7:result.textContent = "DCC";
        break;
        case 8:result.textContent = "DCCC";
        break;
        case 9:result.textContent = "CM";
        break;
        case 10:result.textContent = "M";
        break;
      }
      switch(secondNum){
        case 1:result.textContent += "X";
        break;
        case 2:result.textContent += "XX";
        break;
        case 3:result.textContent += "XXX";
        break;
        case 4:result.textContent += "XL";
        break;
        case 5:result.textContent += "L";
        break;
        case 6:result.textContent += "LX";
        break;
        case 7:result.textContent += "LXX";
        break;
        case 8:result.textContent += "LXXX";
        break;
        case 9:result.textContent += "XC";
        break;
      }
      switch(firstNum){
        case 1:result.textContent += "I";
        break;
        case 2:result.textContent += "II";
        break;
        case 3:result.textContent += "III";
        break;
        case 4:result.textContent += "IV";
        break;
        case 5:result.textContent += "V";
        break;
        case 6:result.textContent += "VI";
        break;
        case 7:result.textContent += "VII";
        break;
        case 8:result.textContent += "VIII";
        break;
        case 9:result.textContent += "IX";
        break;
      }
    }
    else{
      const fourthNum = parseInt(input.value / 1000)
      const thirdNum = parseInt((input.value % 1000) / 100);
      const secondNum = parseInt(((input.value % 1000) % 100) / 10);
      const firstNum = (((input.value % 1000) % 100) % 10);
      switch(fourthNum){
        case 1:result.textContent = "M";
        break;
        case 2:result.textContent = "MM";
        break;
        case 3:result.textContent = "MMM";
        break;
      }
      switch(thirdNum){
        case 1:result.textContent += "C";
        break;
        case 2:result.textContent += "CC";
        break;
        case 3:result.textContent += "CCC";
        break;
        case 4:result.textContent += "CD";
        break;
        case 5:result.textContent += "D";
        break;
        case 6:result.textContent += "DC";
        break;
        case 7:result.textContent += "DCC";
        break;
        case 8:result.textContent += "DCCC";
        break;
        case 9:result.textContent += "CM";
        break;
      }
      switch(secondNum){
        case 1:result.textContent += "X";
        break;
        case 2:result.textContent += "XX";
        break;
        case 3:result.textContent += "XXX";
        break;
        case 4:result.textContent += "XL";
        break;
        case 5:result.textContent += "L";
        break;
        case 6:result.textContent += "LX";
        break;
        case 7:result.textContent += "LXX";
        break;
        case 8:result.textContent += "LXXX";
        break;
        case 9:result.textContent += "XC";
        break;
      }
      switch(firstNum){
        case 1:result.textContent += "I";
        break;
        case 2:result.textContent += "II";
        break;
        case 3:result.textContent += "III";
        break;
        case 4:result.textContent += "IV";
        break;
        case 5:result.textContent += "V";
        break;
        case 6:result.textContent += "VI";
        break;
        case 7:result.textContent += "VII";
        break;
        case 8:result.textContent += "VIII";
        break;
        case 9:result.textContent += "IX";
        break;
      }
    }
  }
}

button.addEventListener("click", run);
button.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    run();
  }
});
