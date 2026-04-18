const priceInput = document.getElementById("price");
const discountInput = document.getElementById("discount");
const result = document.getElementById("result");
const modeToggle = document.getElementById("modeToggle");

// حساب تلقائي
function calculate() {
  let price = parseFloat(priceInput.value);
  let discount = parseFloat(discountInput.value);

  if (isNaN(price) || isNaN(discount)) {
    result.innerHTML = "<p>اكتب البيانات صح</p>";
    return;
  }

  let discountValue = price * (discount / 100);
  let finalPrice = price - discountValue;

  result.innerHTML =
    `💸 قيمة الخصم: ${discountValue.toFixed(2)} جنيه <br>
     💰 السعر النهائي: ${finalPrice.toFixed(2)} جنيه`;
}

// Live update
priceInput.addEventListener("input", calculate);
discountInput.addEventListener("input", calculate);

// Reset
function resetApp() {
  priceInput.value = "";
  discountInput.value = "23";
  result.innerHTML = `
    <p>💸 قيمة الخصم: --</p>
    <p>💰 السعر النهائي: --</p>
  `;
}

// Dark Mode
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
