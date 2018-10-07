// window.onload = function start() {
//   $("html, body").animate({ scrollTop: $('#preloader').offset().top }, 10);
//
//   var lineDrawing = anime({
//     targets: '#lineDrawing .lines path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 1500,
//     delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     loop: true
//   });
//
//   $("html, body").delay(8000).animate({scrollTop: $('#mainscreen').offset().top }, 1000);
//
// document.getElementById('currentDistance').innerHTML =
// "5 m";
// document.getElementById('rewardhistory').innerHTML =
// "5 m";
// startTime();
//
// var ctx = document.getElementById('speedgraph').getContext('2d');
// var chart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
//         datasets: [{
//             label: "",
//             backgroundColor: false,
//             fill: false,
//             borderColor: 'rgb(0, 199, 255)',
//             data: [5, 10, 5, 7, 20, 30, 45, 5, 10, 5, 7, 20, 30, 45],
//         }]
//     },
//     options: {
//       elements:{
//         point:{
//           radius:0
//         }
//       },
//       datasets:[{
//         fill: false
//       }],
//       line:{
//         fill: false
//       },
//       drawBorder: false,
//       drawTicks: false,
//       legend: {
//         display: false
//       },
//       title: {
//         display: false
//       },
//       tooltop:{
//         enabled: false
//       },
//       scales: {
//         yAxes:[{
//           gridLines: false,
//           drawBorder: false,
//           ticks:{
//             display: false
//           }
//         }],
//       xAxes:[{
//         gridLines: false,
//         drawBorder: false,
//         ticks:{
//           display: false
//         }
//       }]
//     }
//   }
// });
//
// var cty = document.getElementById('rewardgraph').getContext('2d');
// var chart2 = new Chart(cty, {
//     type: 'line',
//     data: {
//         labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
//         datasets: [{
//             label: "",
//             backgroundrColor: '',
//             fill: false,
//             borderColor: 'rgb(225, 210, 0)',
//             data: [5, 6, 2, 4, 5, 6, 5, 1, 2, 8, 7, 9, 10, 1],
//         }]
//     },
//     options: {
//       elements:{
//         point:{
//           radius:0
//         }
//       },
//       tooltips: {
//          enabled: true
//     },
//       drawBorder: false,
//       drawTicks: false,
//       legend: {
//         display: false
//       },
//       title: {
//         display: false
//       },
//       tooltop:{
//         enabled: false
//       },
//       scales: {
//         yAxes:[{
//           gridLines: false,
//           drawBorder: false,
//           ticks:{
//             display: false
//           }
//         }],
//       xAxes:[{
//         gridLines: false,
//         drawBorder: false,
//         ticks:{
//           display: false
//         }
//       }]
//     }
//   }
// });
// };

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function startTime(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  if (h == 0) {
    h = 12;
  } else if (h > 12) {
    h = h - 12;
  }
  document.getElementById('clock').innerHTML =
  h + ":" + m;
  document.getElementById('clock2').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime, 500);
}
