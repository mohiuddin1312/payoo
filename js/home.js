// add money to the acount

// step-1 add event handler to the add money button inside form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page after relode submit.
    event.preventDefault();
    // step-2 input add money
    const inputAddMoney = document.getElementById("input-add-money").value;
    console.log(inputAddMoney);
    const inputPin = document.getElementById("input-pin-number").value;
    console.log(inputPin);
  });
