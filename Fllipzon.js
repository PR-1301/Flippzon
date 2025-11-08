 

const buttons = document.querySelectorAll('.product-card');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    window.alert("Sign in to place order!");
  });
});