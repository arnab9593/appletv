// // all  login js code here
  //   let     Data=JSON.parse(localStorage.getItem("")) || []
  //   console.log(Data)
  //   var fun =document.querySelector("a");
  //   fun.addEventListener("click",function(event){
  //     event.preventDefault();
  //     let form=document.getElementById("arrowIcon")
  //     var Dat={
  //       // AppleId:UserName.value,
  //      passwords:form.psd.value,
  //     };
  //    console.log(Dat);
  //     if((Passwords=="") || (passwords.length<8)){
  //       alert("non")
  // }
      
     
  //   });




//*************************************************************** */

   // let   userData=JSON.parse(localStorage.getItem("setData")) || [];
   
    document.getElementById("a").addEventListener("click",function(){
   
    
     

      
      let ram=document.getElementById("UserName").value
      if(ram==""){
        alert("enter email id")
      }
      
      
      
       else{
       
      let id=document.getElementById("arrowIcon")
    
        id.style.marginLeft="360px",marginTop="-10px"
        // let minus=document.createElement("input").value
       
        // minus.setAttribute("id","ama")
   
        // minus.placeholder="Password"
        let ash=document.getElementById("pas")
        ash.style.border ="2px solid grey"
        // minus.style.fontSize="22px"
    document.getElementById("pass").append(ash,id)
    
      document.getElementById("create").style.marginTop="146px"
      // if(minus==""){
      //   alert("yygyvdfftdbn")
      // }
    
       

       }
       
    })
    //   let tp=document.getElementById("pas")
    //   document.getElementById("pass").append(id,tp)
    //   document.getElementById("a").style.marginTop="50px",marginLeft="360px"
