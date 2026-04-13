function checkDept(){
  const dept = document.getElementById("dept").value;
  const rollBox = document.getElementById("rollBox");

  if(dept === "cse"){
    rollBox.style.display = "block";   // show roll input
  } else if(dept === "") {
    rollBox.style.display = "none";
  } else {
    rollBox.style.display = "none";
    alert("❌ Access Denied! Only COMPUTER department students can enter.");
  }
}


// VALIDATE ROLL NUMBER FORMAT
function isValidRoll(roll){
  // Example: 0125UCSM1113
  const pattern = /^0125UCS[M|F]1\d{3}$/;

  if(!pattern.test(roll)) return false;

  // extract last 3 digits
  let lastThree = parseInt(roll.slice(-3));
  
  return lastThree >= 1 && lastThree <= 143;
}


function login(){
  const dept = document.getElementById("dept").value;
  const roll = document.getElementById("roll").value.trim();

  if(dept !== "cse"){
    alert("❌ Only COMPUTER students can login!");
    return;
  }

  if(!isValidRoll(roll)){
    alert("❌ Invalid Roll Number Format!\nCorrect Example: 0125UCSM1001");
    return;
  }

  // Save login session
  localStorage.setItem("loggedin", "yes");
  localStorage.setItem("roll", roll);

  window.location.href = "index.html";  // your main site
}