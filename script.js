
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(tab => tab.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
document.getElementById("addItemBtn").addEventListener("click", () => {
  const name = document.getElementById("itemName").value.trim();
  const qty = document.getElementById("itemQty").value.trim();
  const price = document.getElementById("itemPrice").value.trim();

  if (!name || !qty || !price) {
    alert("Please fill all fields!");
    return;
  }

  const tbody = document.querySelector("#inventoryTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${qty}</td>
    <td>₹${price}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  tbody.appendChild(row);
  document.getElementById("itemName").value = "";
  document.getElementById("itemQty").value = "";
  document.getElementById("itemPrice").value = "";

  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
  });
});

// Sales Section
document.getElementById("addSaleBtn").addEventListener("click", () => {
  const item = document.getElementById("saleItem").value.trim();
  const qty = document.getElementById("saleQty").value.trim();
  const date = new Date().toLocaleString();

  if (!item || !qty) {
    alert("Enter sale details!");
    return;
  }

  const tbody = document.querySelector("#salesTable tbody");
  const row = document.createElement("tr");
  row.innerHTML = `<td>${item}</td><td>${qty}</td><td>${date}</td>`;
  tbody.appendChild(row);

  document.getElementById("saleItem").value = "";
  document.getElementById("saleQty").value = "";
});
document.getElementById("addOrderBtn").addEventListener("click", () => {
  const item = document.getElementById("orderItem").value.trim();
  const qty = document.getElementById("orderQty").value.trim();
  const date = new Date().toLocaleString();
  if (!item || !qty) {
    alert("Enter order details!");
    return;
  }
  const tbody = document.querySelector("#ordersTable tbody");
  const row = document.createElement("tr");
  row.innerHTML = `<td>${item}</td><td>${qty}</td><td>${date}</td>`;
  tbody.appendChild(row);
  document.getElementById("orderItem").value = "";
  document.getElementById("orderQty").value = "";
});
