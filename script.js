// Sample data only. Records are not saved to a database.
const movements = [
  { date: "2026-10-31", id: "SFG-101", name: "Header Assembly", from: "Plant 1", to: "Plant 2", department: "Headers", quantity: 120, status: "Pending" },
  { date: "2026-10-30", id: "SFG-102", name: "Side Panel", from: "Plant 2", to: "Plant 3", department: "Sheet Metal", quantity: 80, status: "Completed" },
  { date: "2026-10-29", id: "SFG-103", name: "Header Bracket", from: "Plant 3", to: "Plant 1", department: "Headers", quantity: 60, status: "Pending" },
  { date: "2026-10-28", id: "SFG-104", name: "Metal Cover", from: "Plant 1", to: "Plant 3", department: "Sheet Metal", quantity: 45, status: "Completed" }
];

const navLinks = document.querySelectorAll(".nav-link");
const screens = document.querySelectorAll(".screen");
const pageTitle = document.getElementById("page-title");

function showScreen(screenName) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === screenName));
  navLinks.forEach(link => link.classList.toggle("active", link.dataset.screen === screenName));
  const titles = { dashboard: "Dashboard", send: "Send SFG", receive: "Receive SFG", history: "Movement History" };
  pageTitle.textContent = titles[screenName];
}
navLinks.forEach(link => link.addEventListener("click", () => showScreen(link.dataset.screen)));

function statusLabel(status) {
  const className = status === "Completed" ? "status completed" : "status";
  return `<span class="${className}">${status}</span>`;
}

function renderDashboard() {
  document.getElementById("recent-table").innerHTML = movements.slice(0, 3).map(item => `
    <tr><td>${item.id}</td><td>${item.name}</td><td>${item.from}</td><td>${item.to}</td>
    <td>${item.quantity}</td><td>${statusLabel(item.status)}</td></tr>`).join("");
}

function renderReceive() {
  const pending = movements.filter(item => item.status === "Pending");
  document.getElementById("receive-table").innerHTML = pending.map(item => `
    <tr><td>${item.id}</td><td>${item.name}</td><td>${item.from}</td><td>${item.to}</td>
    <td>${item.quantity}</td><td><button class="small-btn placeholder-receipt" data-id="${item.id}">Confirm Receipt</button></td></tr>`).join("");
  document.querySelectorAll(".placeholder-receipt").forEach(button => {
    button.addEventListener("click", () => alert("Receipt confirmation is not implemented in this prototype."));
  });
}

function renderHistory(searchText = "") {
  const query = searchText.toLowerCase();
  const filtered = movements.filter(item =>
    Object.values(item).some(value => String(value).toLowerCase().includes(query))
  );
  document.getElementById("history-table").innerHTML = filtered.map(item => `
    <tr><td>${item.date}</td><td>${item.id}</td><td>${item.name}</td><td>${item.from}</td>
    <td>${item.to}</td><td>${item.department}</td><td>${item.quantity}</td><td>${statusLabel(item.status)}</td></tr>`).join("")
    || '<tr><td colspan="8">No matching sample records.</td></tr>';
}

document.getElementById("send-form").addEventListener("submit", event => {
  event.preventDefault();
  const message = document.getElementById("form-message");
  const sending = document.getElementById("sending-plant").value;
  const receiving = document.getElementById("receiving-plant").value;
  const quantity = Number(document.getElementById("quantity").value);

  if (sending === receiving) {
    message.textContent = "Sending Plant and Receiving Plant must be different.";
    message.className = "message error";
    return;
  }
  if (!Number.isInteger(quantity) || quantity < 1) {
    message.textContent = "Please enter a quantity of at least 1.";
    message.className = "message error";
    return;
  }

  message.textContent = "Basic validation passed. Dispatch processing is not implemented, so this record was not saved.";
  message.className = "message success";
});

document.getElementById("history-search").addEventListener("input", event => {
  renderHistory(event.target.value);
});

renderDashboard();
renderReceive();
renderHistory();
