"use strict"

// const erro = () =>{
//     var inputvalue = document.getElementById("error");
//     var inputvalue2 = document.getElementById("error1");
//     inputvalue.innerHTML = "error error";
//     inputvalue2.innerHTML = "error"
//     console.log("hello");

// }

const erro = (event) => {
  event.preventDefault();
  var Fristname = document.getElementById("Frist_name").value;
  var Lastname = document.getElementById("Last_name").value;
  var Emailaddres = document.getElementById("Addre_inp").value;
  var radio1 = document.getElementById("radio_1");
  var radio2 = document.getElementById("radio_2");
  var Message = document.getElementById("Message").value;
  var checkbox = document.getElementById("checkbox");
  document.getElementById("radi_err").style.textAlign = "center";
  document.getElementById("message_err").style.textAlign = "center";

  // var validation = false;
  // var Lastname = document.getElementById("Message").value;
  if (Fristname.trim() === "") {
    // document.getElementById("Fname_err").innerHTML = "This field is required";
    // setTimeout(()=>{
    //     document.getElementById("Fname_err").innerHTML = "";
    // },1000)
    showError("Fname_err", "This field is required");
    // validation = true;
    // return
  }

  if (Lastname.trim() === "") {
    // document.getElementById("Lname_err").innerHTML = "This field is required";
    // return
    showError("Lname_err", "This field is required");
    // validation = true;
    // return
  }

  const Emailcheck = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };
  if (Emailaddres === "") {
    // document.getElementById("mail_err").innerHTML = "This field is required";
    showError("mail_err", "This field is required");
    // validation = true;
    // return
  } else if (!Emailcheck(Emailaddres)) {
    // document.getElementById("mail_err").innerHTML = "Please enter a vaild email address";
    showError("mail_err", "Please enter a vaild email address");
    // validation = true;
  }

  var radio = document.getElementsByName("radio");
  var radiovalue = false;

  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      radiovalue = true;
      // validation = true;
      break;
    }
  }
  if(!radiovalue){
    showError("radi_err","Plese Select a quary type");
    // validation = true;
  }

  if(Message === ""){
    showError("message_err","This field is required");
    // validation = true;
  }

  if(!checkbox.checked){
    showError("check_box","To submit this form,plese consent to being contacted");
    // validation = true;
  }
 
//  console.log(validation);
//   if(!validation){
//     document.getElementById("inner").style.display = "none";
//     document.getElementById("loading_container").style.display = "block";
//     setTimeout(()=>{
//       document.getElementById("loading_container").style.display = "none";
//       document.getElementById("Thanks_message").style.display = "block";

//     },3000)

//  }

 if(Message !== "" && checkbox.checked && radiovalue && Emailaddres !== "" && Lastname !== "" && Fristname !== "" ){
  console.log("validation");
      document.getElementById("Frist_name").value = "";
      document.getElementById("Last_name").value = "";
      document.getElementById("Addre_inp").value = "";
      document.getElementById("radio_1").checked = false;
      document.getElementById("radio_2").checked = false;
      document.getElementById("Message").value = "";
      document.getElementById("checkbox").checked = false;

      document.getElementById("inner").style.display = "none";
      document.getElementById("loading_container").style.display = "block";
      setTimeout(()=>{
              document.getElementById("loading_container").style.display = "none";
              document.getElementById("Thanks_message").style.display = "flex";
        
            },3000)
 }

};

const showError = (elemetid, ermessage, timeout = 1000) => {
  var errorElement = document.getElementById(elemetid);
  errorElement.textContent = ermessage;
  setTimeout(() => {
    errorElement.textContent = "";
  }, timeout);
};


const closemess = () =>{
  // alert("button")
  document.getElementById("Thanks_message").style.display = "none";
  document.getElementById("inner").style.display = "block";
}