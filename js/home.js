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
    // step-3 varify pin numbe
    // wrong way to validate pin number.
    if (inputPin === "222") {
      console.log("add money to your acount");
      const balance = document.getElementById("accound-balance").innerText;
      console.log(balance);
      // step-4 add money input with balace.
      const addMoneyNumber = parseFloat(inputAddMoney);
      const balanceNumber = parseFloat(balance);
      const newbalance = balanceNumber + addMoneyNumber;
      console.log(newbalance);
      //   step-5 Update the balance
      document.getElementById("accound-balance").innerText = newbalance;
    } else {
      alert("Fail to add money. please try again");
    }
  });
