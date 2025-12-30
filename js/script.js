// Counter logic
let count = 0;
const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
    count++;
    counterEl.textContent = count;
});

// Form logic
const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");
const messageEl = document.getElementById("message");

submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name === "") {
        messageEl.textContent = "Name is required.";
        messageEl.className = "error";
    } else {
        messageEl.textContent = `Hello, ${name}!`;
        messageEl.className = "success";
        nameInput.value = "";
    }
});
