const paymentForm = document.getElementById('submit');
paymentForm.addEventListener("click", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();
console.log("hi")
  let handler = PaystackPop.setup({
    key: 'pk_test_67b30593c8f7f50f4dd367f564310a1f23eb37a1', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: 1000 * 100, // Convert 1000 NGN to kobo (1000 * 100 = 100000)
    currency: 'NGN',
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}