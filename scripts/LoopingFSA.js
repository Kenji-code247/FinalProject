document.getElementById("calculateBtn").addEventListener("click", () => {
  let n = parseInt(document.getElementById("nValue").value);
  if(isNaN(n) || n < 0) {
    document.getElementById("factorialResult").textContent = "Please enter a valid non-negative integer.";
    document.getElementById("sumResult").textContent = "";
    document.getElementById("avgResult").textContent = "";
    return;
  }

  let fact = 1, i = n;
  while(i > 1){
    fact *= i;
    i--;
  }

  let sum = 0, j = 1;
  if(n > 0){
    do {
      sum += j;
      j++;
    } while(j <= n);
  }

  let avg = n > 0 ? sum/n : 0;

  document.getElementById("factorialResult").textContent = `Factorial of ${n}: ${fact}`;
  document.getElementById("sumResult").textContent = `Sum of first ${n} numbers: ${sum}`;
  document.getElementById("avgResult").textContent = `Average of first ${n} numbers: ${avg.toFixed(2)}`;
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("nValue").value = "";
  document.getElementById("factorialResult").textContent = "";
  document.getElementById("sumResult").textContent = "";
  document.getElementById("avgResult").textContent = "";
});
