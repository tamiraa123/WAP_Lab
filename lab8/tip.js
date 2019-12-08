function calcTip() {
  const subtotalElem = document.getElementById('subtotal');
  const tipElem = document.getElementById('tip');
  const totalElem = document.getElementById('total');
  const subTotal = parseFloat(subtotalElem.value);
  const tip = parseFloat(tipElem.value);
  var total = subTotal + subTotal * tip / 100;
  totalElem.innerHTML = '$' + total;
}