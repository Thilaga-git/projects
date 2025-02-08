document.getElementById('tcalculate').addEventListener('click', function() {
    const tamount = parseFloat(document.getElementById('tamount').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(tamount) || isNaN(weight) || tamount < 0 || weight < 0) {
        alert('Please enter valid positive numbers for both fields.');
        return;
    }

    const totalprice = tamount * weight;

    document.getElementById('totalprice').innerText = `Total Amount: ₹${totalprice.toFixed(2)}`;
});


document.getElementById('calculate').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const gstRate = parseFloat(document.getElementById('gstRate').value);

    if (isNaN(amount) || isNaN(gstRate) || amount < 0 || gstRate < 0) {
        alert('Please enter valid positive numbers for both fields.');
        return;
    }

    const gstAmount = (amount * gstRate) / 100;
    const totalAmount = amount + gstAmount;

    document.getElementById('gstAmount').innerText = `GST Amount: ₹${gstAmount.toFixed(2)}`;
    document.getElementById('totalAmount').innerText = `Total Amount: ₹${totalAmount.toFixed(2)}`;
});


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active');
    })
}
