//update the color of a box with value of color 1
//document.getElementById('demo').style.backgroundColor = color1;
//var result = document.getElementById('demo').innterHTML;


var randomC;
var colorArray = [];

function clearArray() {
  colorArray = [];
  $('#target').empty();
}

  //loop that creates multiple variables
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

  function generateHex(num) {
    for (var i = 0; i < num; i++){
    	window['color' + i] = '#' + Math.floor(Math.random() *16777215).toString(16);
      colorArray.push(window['color' + i].toUpperCase());
      document.getElementById('showcase' + i).style.backgroundColor = colorArray[i].toUpperCase();
      document.getElementById('answer' + i).innerHTML = colorArray[i].toUpperCase();
    }

	  // document.getElementById('showcase1').style.backgroundColor = color1
  	// document.getElementById('showcase2').style.backgroundColor = color2
    // document.getElementById('showcase3').style.backgroundColor = color3
    // document.getElementById('showcase4').style.backgroundColor = color4
    //
    // document.getElementById('answer1').innerHTML = color1
    // document.getElementById('answer2').innerHTML = color2
    // document.getElementById('answer3').innerHTML = color3
    // document.getElementById('answer4').innerHTML = color4

}

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

    $('body').on("click", "#start-button", function() {
      document.getElementById('determine-win').innerHTML = '';
      $('.showcase').each(function (i) {
        $("#showcase" + i).show();
        $("#answer" + i).hide();
    });
  });
});
