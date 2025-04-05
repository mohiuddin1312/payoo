document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutMoney = document.getElementById("input-cash-out").value;
    const cashNumber = parseFloat(cashOutMoney);
    const pinNumber = document.getElementById("input-pinNumber").value;
    if (pinNumber === "6789") {
      console.log("taka tultay parbay");
      const balance = document.getElementById("accound-balance").innerText;
      const balanceNumber = parseFloat(balance);
      const RemainBalance = balanceNumber - cashNumber;
      //   show Remain Balance in display
      document.getElementById("accound-balance").innerText = RemainBalance;
    } else {
      alert("Faild to cash out! please try again leter");
    }
    console.log(typeof cashNumber);
  });
