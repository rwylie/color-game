// var color1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
// var color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
// var color3 = '#' + Math.floor(Math.random() * 16777215).toString(16);

//update the color of a box with value of color 1
//document.getElementById('demo').style.backgroundColor = color1;
//var result = document.getElementById('demo').innterHTML;

// var result = document.getElementById('demo').innerHTML;
// var result1 = document.getElementById('demo1').innerHTML;
// var result2 = document.getElementById('demo2').innerHTML;
// var result3 = document.getElementById('demo3').innerHTML;

var color1;
var color2;
var color3;
var randomC;
var colorArray = [];
//generates the random color objects
  function clearArray() {
    colorArray = [];
  }
  function generateHex1() {
    color1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('showcase1').style.backgroundColor = color1;
    document.getElementById('answer1').innerHTML = color1;
    colorArray.push(color1);
}
  function generateHex2() {
    color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('showcase2').style.backgroundColor = color2;
    document.getElementById('answer2').innerHTML = color2;
    colorArray.push(color2);
  }
  function generateHex3() {
    color3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('showcase3').style.backgroundColor = color3;
    document.getElementById('answer3').innerHTML = color3;
    colorArray.push(color3);
  }
  function randomColor(arr) {
    randomC = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById('random-color').innerHTML = randomC;
    document.getElementById('guess').innerHTML = "Guess the Color";
}

//function that checks to see if the user chooses the correct color;
  function match(color) {
    if (color === randomC) {
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
        console.log(color1);
        console.log(color2);
        console.log(color3);
        console.log(colorArray);
        console.log(randomC);
        document.getElementById('determine-win').innerHTML = '';
        $("#showcase1").show();
        $("#showcase2").show();
        $("#showcase3").show();
        $("#answer1").hide();
        $("#answer2").hide();
        $("#answer3").hide();
      });
  });
