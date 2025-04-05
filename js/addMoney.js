document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMonyNumber = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById("input-pin-number").value;
    if (pinNumber === "1234") {
      console.log("we add money");
      const balance = document.getElementById("accound-balance").innerText;
      const balanceNumber = parseFloat(balance);
      const moneyNumber = parseFloat(addMonyNumber);
      const newbalance = balanceNumber + moneyNumber;

      document.getElementById("accound-balance").innerText = newbalance;
      console.log(newbalance);
    } else {
      alert("Faild ! Try again");
    }
  });
