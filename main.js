// function showSelectedOption() {
//     let selectElement = document.querySelector(".mySelect");
//     let selectedOption = selectElement.options[selectElement.selectedIndex].value;
//     let messageBlock = document.querySelector(".messageBlock");
    
//     switch (selectedOption) {
//       case "coffee":
//         messageBlock.innerText = "Ви обрали каву.";
//         break;
//       case "tea":
//         messageBlock.innerText = "Ви обрали чай.";
//         break;
//       case "juice":
//         messageBlock.innerText = "Ви обрали сік.";
//         break;
//       default:
//         messageBlock.innerText = "";
//         break;
//     }
//   }


// function selectedWeek() {

//     let input = document.querySelector(".myInput").value;


//     switch(input){
//         case 'Monday':
//         case 'Tuesday':
//         case 'Wednesday':
//         case 'Thursday':
//         case 'Friday':
//             alert("Це робочий день!");
//             break;
//         case 'Saturday':
//         case 'Sunday':
//             alert("Це вихідний день!")
//             break;
//         default:
//             alert("Ви не ввели день тиждня!")
//             break;
//     }
// }




// function checkSeason(){
//     let input = document.querySelector(".myInput").value;
//     let month = parseInt(input);



//     switch (month) {
//         case 12:
//         case 1:
//         case 2:
//             season = "зима";
//             break;
//         case 3:
//         case 4:
//         case 5:
//             season = "весна";
//             break;
//         case 6:
//         case 7:
//         case 8:
//             season = "літо";
//             break;
//         case 9:
//         case 10:
//         case 11:
//             season = "осінь";
//             break;
//         default:
//             alert("Введіть прнавильний номер місяця")
//     }
//     alert("Цей місяць належить до пори року: " + season);
// }



// function checkDayInMonth(){
//     let input = document.querySelector(".myInput").value;
//     let month = parseInt(input);


//     switch (month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             alert("В цьому місяці 31 день");
//             break;
//         case 4:
//         case 6:
//         case 9: 
//         case 11:
//             alert("В цьоу місяці 30 днів");
//             break;
//         case 2:
//             alert("В цьому місяці 28-29 днів");
//             break;
//         default:
//             alert("Ви ввели неправильний номер місяця");
//     }
// }




// function showMessage() {
//     let color = document.querySelector("#color").value.toLowerCase();

//     switch (color) {
//         case "red":
//             alert("Стоп!");
//             break;
//         case "green":
//             alert("Йти!");
//             break;
//         case "yellow":
//             alert("Чекати!");
//             break;
//         default:
//             alert("Невідомий колір.");
//             break;
//     }
// }




function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let resultElement = document.getElementById("result");

    if (operation === "/" && num2 === 0) {
      resultElement.innerHTML = "Помилка! Ділення на нуль недопустиме.";
      return;
    }

    var result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Невідома операція";
    }

    resultElement.innerHTML = "Результат: " + result;
  }