//  all js code in signup
 
 

var form=document.querySelector("form");
form.addEventListener("submit",function(event){
  let arr=JSON.parse(localStorage.getItem("setdata")) || []
  console.log(arr)
  event.preventDefault();
  var data={
    // form:form.formid.value,
    username:form.first.value,
    lastname:form.second.value,
    birth:form.third.value,
    email:form.fourth.value,
    password:form.fifth.value,
    check:form.sixth.value,
  };



if (data.username=="") 
{
  alert("enter your name")
} 
// else if(data.form==""){
//   alert("fill this form")
// }

else if(data.birth==""){
  alert("please fill the dob")
}
else if(data.lastname==""){
  alert("fill the last name")
}
else if (data.email==""){
  alert("enter your email")
}
else if ((data.password=="") ||(data.password.length<8)){
  alert("enter password maximum 8 digit")
}
else if((document.getElementById("sixth").checked!==true))
{
    alert("Please click on check box")
       
}

else 
{
  alert("SignIn completed successfully...")
  
  arr.push(data)
  
  localStorage.setItem("setData",JSON.stringify(arr));
  // console.log()
  location.href="../index.html";
  let name=data.username +" "+ data.lastname;
  sessionStorage.setItem("userName", name);
}
});

