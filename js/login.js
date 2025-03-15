// console.log("click the js file");
//step-1 set event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // step-2 prevent default behavior(Prevent reloding browser )
    event.preventDefault();
    console.log("click the js file");

    //step-3 get the Phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are login");
      window.location.href = "/home.html";
    } else {
      alert("you have wrong information");
    }
  });
