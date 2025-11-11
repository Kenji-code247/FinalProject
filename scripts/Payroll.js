let payroll = [];

function renderTable() {
  const tbody = document.querySelector("#payrollTable tbody");
  tbody.innerHTML = "";
  payroll.forEach((emp, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index+1}</td>
      <td>${emp.name}</td>
      <td>${emp.days}</td>
      <td>₱${emp.rate.toFixed(2)}</td>
      <td>₱${emp.gross.toFixed(2)}</td>
      <td>₱${emp.deduction.toFixed(2)}</td>
      <td>₱${emp.net.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.getElementById("addBtn").addEventListener("click", () => {
  const name = document.getElementById("empName").value;
  const days = parseFloat(document.getElementById("daysWorked").value);
  const rate = parseFloat(document.getElementById("dailyRate").value);
  const deduction = parseFloat(document.getElementById("deduction").value);

  if(!name || isNaN(days) || isNaN(rate) || isNaN(deduction)){
    alert("Please fill all fields correctly.");
    return;
  }

  const gross = days * rate;
  const net = gross - deduction;
  payroll.push({name, days, rate, deduction, gross, net});
  renderTable();

  document.getElementById("empName").value = "";
  document.getElementById("daysWorked").value = "";
  document.getElementById("dailyRate").value = "";
  document.getElementById("deduction").value = "";
});

document.getElementById("deleteBtn").addEventListener("click", () => {
  let line = parseInt(prompt("Enter line number to delete:"));
  if(!isNaN(line) && line >= 1 && line <= payroll.length){
    payroll.splice(line-1, 1);
    renderTable();
  } else {
    alert("Invalid line number.");
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  payroll = [];
  renderTable();
});
