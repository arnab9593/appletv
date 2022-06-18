let userDetail = JSON.parse(localStorage.getItem("setData"));

document.getElementById("a").addEventListener("click", function () {

  let ram = document.getElementById("UserName").value
  if (ram == "") {
    alert("enter email id")
  }
  else {

    let ram = document.getElementById("UserName").value;

    let id = document.getElementById("arrowIcon")
    id.addEventListener("click", function () {
      let pass = ash.value;
      loginFun(pass, ram);
    })

    id.style.marginLeft = "360px", marginTop = "-10px"

    let ash = document.getElementById("pas")
    ash.setAttribute("placeholder", "XXXXXXXXXXX");
    ash.style.border = "2px solid grey"
    // console.log(ash.value);
    document.getElementById("pass").append(ash, id)

    document.getElementById("create").style.marginTop = "146px"

  }

});


function loginFun(password, name) {
  if (name == "" || password == "") {
    alert("Enter password!!");
  } else {
    userDetail.forEach(element => {
      if (password == element.password && name == element.email) {
        let name = element.username + " " + element.lastname;
        sessionStorage.setItem("userName", name);
        alert("LOgin successfull...");
        location.href = "../index.html";
      } else {
        window.location.reload();
        alert("Email or password is wrong!!!! , Please recheck once again ....");
      }
    });
  }
  // console.log(password, name)
}
