//update the color of a box with value of color 1
//document.getElementById('demo').style.backgroundColor = color1;
//var result = document.getElementById('demo').innterHTML;

//empty variable that will hold the value of the color the user will guess.
var randomC;
//empty array that later will push hexadecimal values to
var colorArray = [];

function clearArray() {
  colorArray = [];
  $('#target').empty();
}

  //loop that creates multiple divs based on what level the user chooses
function generateDiv(num) {
    for (var i = 0; i < num; i++) {
      $('#target').append($(`<div class="showcase" id="showcase${i}"
      onclick="match(color${i})"
        style="background: #FF6666; margin: auto; margin-bottom: 30px; height: 135px;
        border-radius: 20px;">
        <img src="images/foxy-emoji-1.png" class="img-fluid">
        <h3 id="answer${i}" style="color: #778899;"></h3><br><br>
      </div> <br><br>`))
      }
    }

//generates the hexadecimal colors and pushes them to colorArray
//creates showcase + i and gives it a color value
//creates answer + i and gives it a color value
  function generateHex(num) {
    for (var i = 0; i < num; i++){
    	window['color' + i] = '#' + Math.floor(Math.random() *16777215).toString(16);
      colorArray.push(window['color' + i].toUpperCase());
      document.getElementById('showcase' + i).style.backgroundColor = colorArray[i].toUpperCase();
      document.getElementById('answer' + i).innerHTML = colorArray[i].toUpperCase();
    }

}

//function that uses Math.random to choose a random color from the colorArray
  function randomColor(arr) {
    randomC = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById('random-color').innerHTML = randomC;
    document.getElementById('guess').innerHTML = "Guess the Color";
}

//function that checks to see if the user chooses the correct color

  function match(color) {
    if (color.toUpperCase() === randomC.toUpperCase()) {
      document.getElementById('determine-win').innerHTML = "You Win!";
      resetGame();
    }  else {
      document.getElementById('determine-win').innerHTML = "Try Again!";
    }
  }

  // var points = 0;
  // function trackPoints() {
  // for (var i; i < )
  // points =+ 1;
  // console.log(points);
  // }
  function resetGame() {
    setTimeout(function () {
      $('.showcase').each(function (i) {
        document.getElementById('showcase' + i).style.backgroundColor = colorArray[i];
        $("#showcase" + i).show();
        $("#answer" + i).show();
      });
    randomC = '';
    }, 500);
  }
// javascript is loading the divs that hold shocase + i and answer + i
//the the event listener .on is needed in jquery and will 'listens'
//for when those elements are created

  $(document).ready(function(){
    $("body").on("click", "#showcase0", function() {
      $('#answer0').fadeIn('fast');
    });
    $("body").on("click", "#showcase1", function() {
        $('#answer1').fadeIn('fast');
    });
    $("body").on("click", "#showcase2", function() {
        $('#answer2').fadeIn('fast');
    });
    $("body").on("click", "#showcase3", function() {
        $('#answer3').fadeIn('fast');
    });
    $("body").on("click", "#showcase4", function() {
        $('#answer4').fadeIn('fast');
    });
    $("body").on("click", "#showcase5", function() {
        $('#answer5').fadeIn('fast');
    });

// .each is a jquery loop, below it is used to link the class showcase with showing the colors
//and hiding the answers when a user clicks a button with the id of start-button (which are now level buttons)
    $('body').on("click", "#start-button", function() {
      document.getElementById('determine-win').innerHTML = '';
      $('.showcase').each(function (i) {
        $("#showcase" + i).show();
        $("#answer" + i).hide();
    });
  });
});
