/* Fill your code*/


let form = document.form["RegForm"];
let name = form.Name.value;
let address = form.Address.value;
let email = form.EMail.value;
let pwd = form.Password.value;
let confirmpwd = form.cPassword.value;
let phone = form.phone.value;

let name_pattern = /[A-Za-z]{8-15}/;
let address_pattern = /\w+/
let email_pattern = /[a-z]+[0-9\_\,]*\@{1}[a-z]+\.{1}[a-z]{2,3}$/
let pwd_pattern = /\w+[\!\@\#\$\%\^\&\*\(\)]+/;
let confirmpwd_pattern;
let phone_pattern = /^\d{10}/;

if(!name || !name_pattern.test(name)){
    document.querySelector("#name").innerHTML = "Atleast 8 to 15 characters Required";
}
if(!address || !address_pattern.test(address)){
    document.querySelector("#address").innerHTML = "Atleast 8 to 15 characters Required";
}
if(!email || !email_pattern.test(email)){
    document.querySelector("#email").innerHTML = "Atleast 8 to 15 characters Required";
}
if(!pwd || !pwd_pattern.test(pwd)){
    document.querySelector("#pwd").innerHTML = "Atleast 8 to 15 characters Required";
}
if(!confirmpwd || !confirmpwd==pwd){
    document.querySelector("#cpwd").innerHTML = "Atleast 8 to 15 characters Required";
}
if(!phone || !phone_pattern.test(phone)){
    document.querySelector("#phone").innerHTML = "Atleast 8 to 15 characters Required";
}