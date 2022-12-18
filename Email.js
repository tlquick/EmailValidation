let check = document.querySelector(".check");
let password = document.querySelector(".password");
let text = document.querySelector(".text");

let regex = /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/; //validate email
check.addEventListener("click", ()=>{
    if (password.value == ""){
        text.innerText = "Please enter valid email address";
        text.style.color = "#000"; //black text
    }
    else if (password.value.match(regex)){
        text.innerText = "Valid email";
        text.style.color = "rgba(4,125,9,1)"; //green text
    }
    else{
        text.innerText = "Email address not valid";
        text.style.color = "rgba(255,0,0,1)"; //red text
    }
})
