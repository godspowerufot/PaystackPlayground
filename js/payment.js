const paymentForm = document.getElementById('submit');
paymentForm.addEventListener("click", payWithPaystack, false);

const PAYSTACK_KEY = import.meta.env.VITE_PAYSTACK_KEY;


function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key:"pk_live_32fe5ff884e01fba885bb862920e91fec3e75bb4" , // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: 1050 * 100, // Convert NGN to kobo
    currency: 'NGN',
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), 
    onClose: function(){
      alert('Payment window closed.');
    },
    callback: function(response){
      // Show modal with transaction reference
      document.getElementById("payment-ref").textContent = response.reference;
      document.getElementById("success-modal").style.display = "block";
    }
  });

  handler.openIframe();
}

function closeModal() {
  document.getElementById("success-modal").style.display = "none";
}
console.log(PAYSTACK_KEY);

