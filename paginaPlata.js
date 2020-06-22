var ctx = document.getElementById('my_canvas').getContext('2d');
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height;
var diff;
var gradient = ctx.createLinearGradient(0, 0, 170, 0);
gradient.addColorStop("0", "navy");
gradient.addColorStop("0.5" , "aqua");
gradient.addColorStop("1.0", "white");
function progressSim(){
  diff = ((al/100) * Math.PI*2*10).toFixed(2);
  ctx.clearRect(0, 0, cw, ch);
  ctx.lineWidth = 7;
  ctx.fillStyle = "navy";
  ctx.strokeStyle = gradient;
  ctx.textAlign = "center";
  ctx.fillText ((100 - al) + " " + "secunde", cw*.5, ch*.5+2, cw);
  ctx.beginPath();
  ctx.arc(35,35,30, start, diff/10+start, false);
  ctx.stroke();
  if(al>=100) {
    clearTimeout(sim);
  }
  al++;
}
var sim = setInterval(progressSim, 600);
