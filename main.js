//update the color of a box with value of color 1
//document.getElementById('demo').style.backgroundColor = color1;
//var result = document.getElementById('demo').innterHTML;

var color1;
var color2;
var color3;
var randomC;
var colorArray = [];
//generates the random color objects
  function clearArray() {
    colorArray = [];
  }
//   function createHex(num) {
//     for (var i = 0; i < num ; i++) {
//       window['color' + i] = '#' + Math.floor(Math.random() * 16777215).toString(16);
//       colorArray.push(window['color' + i].toUpperCase());
//     }
//   }
//   function createDocs(num) {
//     for  (var i = 0; i < num; i++) {
//       if color0 {
//         document.getElementById('showcase0').style.backgroundColor = color0.toUpperCase();
//         document.getElementById('answer0').innerHTML = color0.toUpperCase();
//       }
//       else if color1 {
//         document.getElementById('showcase0').style.backgroundColor = color0.toUpperCase();
//         document.getElementById('answer0').innerHTML = color0.toUpperCase();
//       }
//   }
// }

  function generateHex1() {
    color1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('showcase1').style.backgroundColor = color1.toUpperCase();
    document.getElementById('answer1').innerHTML = color1.toUpperCase();
    colorArray.push(color1.toUpperCase());
  }

  function generateHex2() {
    color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('showcase2').style.backgroundColor = color2.toUpperCase();
    document.getElementById('answer2').innerHTML = color2.toUpperCase();
    colorArray.push(color2.toUpperCase());
  }
  function generateHex3() {
    color3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('showcase3').style.backgroundColor = color3.toUpperCase();
    document.getElementById('answer3').innerHTML = color3.toUpperCase();
    colorArray.push(color3.toUpperCase());
  }
  function randomColor(arr) {
    randomC = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById('random-color').innerHTML = randomC;
    document.getElementById('guess').innerHTML = "Guess the Color";
}

//function that checks to see if the user chooses the correct color;
  function match(color) {
    if (color.toUpperCase() === randomC.toUpperCase()) {
      document.getElementById('determine-win').innerHTML = "You Win!";
      resetGame();
    } else {
      document.getElementById('determine-win').innerHTML = "Try Again!";

    }
  }

  function resetGame() {
    setTimeout(function () {
    document.getElementById('showcase1').style.backgroundColor = color1;
    document.getElementById('showcase2').style.backgroundColor = color2;
    document.getElementById('showcase3').style.backgroundColor = color3;
    randomC = '';
      $("#showcase1").show();
      $("#showcase2").show();
      $("#showcase3").show();
      $("#answer1").show();
      $("#answer2").show();
      $("#answer3").show();
    }, 500);
  }

  $(document).ready(function(){
      $("#showcase1").click(function() {
          $('#answer1').fadeIn('fast');
      });
      $("#showcase2").click(function(){
          $('#answer2').fadeIn('fast');
      });
      $("#showcase3").click(function(){
          $('#answer3').fadeIn('fast');
      });

      $('#start-button').click(function() {
        document.getElementById('determine-win').innerHTML = '';
        $("#showcase1").show();
        $("#showcase2").show();
        $("#showcase3").show();
        $("#answer1").hide();
        $("#answer2").hide();
        $("#answer3").hide();
      });
  });
// 1. create multiple color variables based on a user entered number
// 2. create for loop less than 6
//3. if user gets the right value on the 1st try they move onto the next level.
  // function createVar(num) { for (var i = 0; i < num + 1; i++) {
  //   window['color' + i] = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   }
// }
