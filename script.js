// All inputs select 
let validEmail = document.getElementById("Email");
let validName = document.getElementById("username");
let validNumber = document.getElementById("phonenumber");

// label select 
let lbemail = document.getElementById("erroremail");
let lbname = document.getElementById("errorname");
let lbnumber = document.getElementById("errornumber");

// regex pattern 
let emailRegex =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/ ;
let nameRegex = /^[a-zA-Z]{4,12}$/;
  let numberRegex = /^[0][3][0-9]{0,3}[-][0-9]{0,7}$/; 

// user name validation 
validName.addEventListener("input",function () {
    let nameValue = validName.value;
    if (nameValue === "") {
        lbname.textContent = "Please Enter your name";
        lbname.style.color = "red";
    }
    else if (!nameRegex.test(nameValue)){
        lbname.textContent = "Valid Name";
        lbname.style.color = "red";
    }
    else {
        lbname.textContent = "";
    }
})

validEmail.addEventListener("input", function(){
    let emailValue = validEmail.value.trim();
    if(emailValue === ""){
        lbemail.style.color = "red";
        lbemail.textContent = "Please Enter your email";
    }
    else if (!emailRegex.test(emailValue)){
        lbemail.textContent = "Valid Email";
        lbemail.style.color = "red";
    }
    else {
        lbemail.textContent = ""
    }
});

validNumber.addEventListener("input", function() { 
  let phoneVal = validNumber.value.trim();
  
  // If the input is empty
  if (phoneVal === "") {
      lbnumber.style.color = "red";
      lbnumber.textContent = "Please Enter your Number";
  }
  else if (!numberRegex.test(phoneVal)) {
      lbnumber.style.color = "red";
      lbnumber.textContent = "Invalid Number"; 
    
    }
  else 
    lbnumber.textContent = "";
  }
);


// Modal
document.getElementById("submit").addEventListener("click", function (){
    // all inputes select 
    let nameValue = validName.value.trim();
    let emailValue = validEmail.value.trim();
    let phoneValue = validNumber.value.trim();
     
    // all regex test 
    let test1 = nameRegex.test(nameValue);
    let test2 = emailRegex.test(emailValue);
    let test3 = numberRegex.test(phoneValue);

   if (test1 && test2 && test3) {
        document.getElementById("message").textContent = " ";
        document.getElementById("staticBackdropLabel").innerHTML = "Form Details";
        document.getElementById("mduser").textContent = "Username: " + nameValue;
        document.getElementById("mdemail").textContent = "Email: " + emailValue;
        document.getElementById("mdnum").textContent = "Phone Number: " + phoneValue;
    } else {
        document.getElementById("message").textContent = "Kindly Fill your details";
        document.getElementById("staticBackdropLabel").innerHTML = "🥺Ooops!";
        document.getElementById("mduser").textContent = " ";
        document.getElementById("mdemail").textContent = " ";
        document.getElementById("mdnum").textContent = " ";
    }
})
