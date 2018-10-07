window.onload = function start() {
  $("html, body").animate({ scrollTop: $('#mainscreen').offset().top }, 10);
  // $("html, body").delay(8000).animate({scrollTop: $('#mainscreen').offset().top }, 1000);

  var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

  document.getElementById('currentspeed').innerHTML =
"23.9";
document.getElementById('currentime').innerHTML =
"12:09";
document.getElementById('currentDistance').innerHTML =
"5 m";
document.getElementById('rewardhistory').innerHTML =
"5 m";
startTime();

var ctx = document.getElementById('speedgraph').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        datasets: [{
            label: "",
            backgroundColor: false,
            fill: false,
            borderColor: 'rgb(0, 199, 255)',
            data: [5, 10, 5, 7, 20, 30, 45, 5, 10, 5, 7, 20, 30, 45],
        }]
    },
    options: {
      elements:{
        point:{
          radius:0
        }
      },
      datasets:[{
        fill: false
      }],
      line:{
        fill: false
      },
      drawBorder: false,
      drawTicks: false,
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltop:{
        enabled: false
      },
      scales: {
        yAxes:[{
          gridLines: false,
          drawBorder: false,
          ticks:{
            display: false
          }
        }],
      xAxes:[{
        gridLines: false,
        drawBorder: false,
        ticks:{
          display: false
        }
      }]
    }
  }
});

var cty = document.getElementById('rewardgraph').getContext('2d');
var chart2 = new Chart(cty, {
    type: 'line',
    data: {
        labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        datasets: [{
            label: "",
            backgroundrColor: '',
            fill: false,
            borderColor: 'rgb(225, 210, 0)',
            data: [5, 6, 2, 4, 5, 6, 5, 1, 2, 8, 7, 9, 10, 1],
        }]
    },
    options: {
      elements:{
        point:{
          radius:0
        }
      },
      tooltips: {
         enabled: true
    },
      drawBorder: false,
      drawTicks: false,
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltop:{
        enabled: false
      },
      scales: {
        yAxes:[{
          gridLines: false,
          drawBorder: false,
          ticks:{
            display: false
          }
        }],
      xAxes:[{
        gridLines: false,
        drawBorder: false,
        ticks:{
          display: false
        }
      }]
    }
  }
});
httpGet();
};

// function httpGet(theUrl){
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//   xmlHttp.send( null );
//   console.log(xmlHttp);
//   setTimeout(httpGet, 5000);
//   return xmlHttp.responseText;
// }

// function doWork() {
// 	// ajax the JSON to the server
// 	$.post("receiver", cars, function(){
//
// 	});
// 	// stop link reloading the page
//  event.preventDefault();
// }

function httpGet() {
  document.getElementById('title').innerHTML = "hello";

  fetch('http://127.0.0.1:5000/data')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
//   fetch('http://127.0.0.1:5000/data')
//   .then(function(response) {
// console.log(response.json());
// })
// .then(function(myJson) {
//   console.log(JSON.stringify(myJson));
// });
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function startTime(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  if (h > 12) {
    h = h - 12;
  }
  document.getElementById('clock').innerHTML =
  h + ":" + m;
  document.getElementById('clock2').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime, 500);
}

function milesperhour(){
  var mph = 0;
  document.getElementById('currentspeed').innerHTML =
  mph;
  var t = setTimeout(startTime, 500);
}
