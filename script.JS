function calculate() {
  let price = document.getElementById("price").value;
  let discount = document.getElementById("discount").value;

  if (price === "" || discount === "") {
    document.getElementById("result").innerText = "من فضلك اكتب البيانات";
    return;
  }

  price = parseFloat(price);
  discount = parseFloat(discount);

  let finalPrice = price - (price * (discount / 100));

  document.getElementById("result").innerText =
    "💰 السعر بعد الخصم: " + finalPrice.toFixed(2) + " جنيه";
}