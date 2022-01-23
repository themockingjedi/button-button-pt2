function changecolor() {
  var ddr1 = document.getElementById("div1");
  var ddr2 = document.getElementById("div2");
  ddr1.className = "duhpink";
  ddr2.className = "purpole";
}

function changeblue() {
  var ddr1 = document.getElementById("div1");
  ddr1.style.backgroundColor = "green";

  var context = ddr1.getContext("2d");
  context.fillStyle = "blue";
  context.fillRect(10, 10, 50, 50);
  context.fillRect(80, 10, 50, 50);
  context.fillStyle = "red";
  context.font = "30px Arial";
  context.fillText("why", 15, 85);
}

function clearchange() {
  var ddr1 = document.getElementById("div1");
  var context = ddr1.getContext("2d");
  context.clearRect(0, 0, ddr1.width, ddr1.height);
  context.style.backgroundColor = "white";
}
