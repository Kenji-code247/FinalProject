document.getElementById("convertBtn").addEventListener("click", () => {
  let val = parseFloat(document.getElementById("value").value);
  let conv = document.getElementById("conversion").value;
  let res;

  if(isNaN(val)) res = "Please enter a valid number.";
  else {
    switch(conv) {
      case "FtoC": res = ((val - 32) * 5/9).toFixed(2) + " °C"; break;
      case "CtoF": res = ((val * 9/5) + 32).toFixed(2) + " °F"; break;
      case "MtoFt": res = (val * 3.28084).toFixed(2) + " ft"; break;
      case "FtoM": res = (val / 3.28084).toFixed(2) + " m"; break;
    }
  }
  document.getElementById("result").textContent = res;
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("value").value = "";
  document.getElementById("conversion").value = "FtoC";
  document.getElementById("result").textContent = "";
});
