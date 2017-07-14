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
    colorArray.push(color1);
}
  function generateHex2() {
    color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('showcase2').style.backgroundColor = color2;
    colorArray.push(color2);
  }
  function generateHex3() {
    color3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('showcase3').style.backgroundColor = color3;
    colorArray.push(color2);
  }
  function randomColor(arr) {
  randomC = arr[Math.floor(Math.random() * arr.length)];
}

  $(document).ready(function(){
      $("#showcase1").click(function(){
          $(this).hide();
      });
      $("#showcase2").click(function(){
          $(this).hide();
      });
      $("#showcase3").click(function(){
          $(this).hide();
      });

      $('#start-button').click(function() {
        console.log(color1);
        console.log(color2);
        console.log(color3);
        console.log(colorArray);
        console.log(randomC);
        $("#showcase1").show();
        $("#showcase2").show();
        $("#showcase3").show();
      });
  });
