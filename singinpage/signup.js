//  all js code in signup

var form = document.querySelector("form");
form.addEventListener("submit", formfunction);
let arr = JSON.parse(localStorage.getItem("setdata")) || [];
console.log(arr);
function formfunction(event) {
  
  console.log(arr.length)
  event.preventDefault();

  let userName = document.querySelector("#first").value;
  let lastName = document.querySelector("#second").value;
  let userBirth = document.querySelector("#third").value;
  let userEmail = document.querySelector("#fourth").value;
  let userPassword = document.querySelector("#fifth").value;
  let checkUser = document.querySelector("#sixth").value;

  let result = false;

  if (arr.length == 0) {
     result = true;
    // let data = {
    //   username: userName,
    //   lastname: lastName,
    //   birth: userBirth,
    //   email: userEmail,
    //   password: userPassword,
    //   check: checkUser,
    // };
    // arr.push(data);
  }
  else {
    arr.forEach(element => {
      console.log(element.email, userEmail, element.email== userEmail)
      if(element.email == userEmail ){
        result = false;
      }
      else{
        result = true;
        
      }
    });

  }
 

  if(result === true){
    let data = {
      username: userName,
      lastname: lastName,
      birth: userBirth,
      email: userEmail,
      password: userPassword,
      check: checkUser,
    };
    arr.push(data);
    // alert("SignIn completed successfully...")
    swal({
      title: "Congratulations!",
      text: "Signin completed sucessfully",
      icon: "success",
      button: "Continue",
    }).then(function (){
      location.href = "../index.html";
    }) 
    localStorage.setItem("setdata", JSON.stringify(arr));
  
  //console.log(userName)
  let name = userName + " " + lastName;
  sessionStorage.setItem("userName", name);
  }
  else{
     swal({
      title: "Opps!",
      text: "Email already exist!",
      icon: "error",
      button: "ok",
    }).then(function (){
      location.href = "signup.html";
    }) 
    
  }
}

