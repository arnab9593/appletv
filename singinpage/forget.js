


 var inform=document.querySelector("form");
 inform.addEventListener("submit",function (event){
     event.preventDefault();
     var num={
         nam:inform.info.value
     };
     console.log(num);
     if (num.nam=="")
     {
         alert("enter your email")
     }

     else{
         alert("successfully")
         window.location.href="newpassword.html"
     }
 });