let username = document.querySelector("#username");
let mail = document.querySelector("#mail");
let password1 = document.querySelector("#password1");
let password2 = document.querySelector("#password2");
let form = document.querySelector("#form");

function show_error(input , messege)
{
    const input_box = input.parentElement;
    input_box.className = "input-box error"
    const small = input_box.querySelector("small")
    small.innerHTML = messege;
}

function show_success(input)
{
    const input_box = input.parentElement;
    input_box.className = "input-box success"
}

function check_mail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)){
        show_success(input)
    }
    else{
        show_error(input , "Email is not valid !");
    }
}

function checkLength(input, min, max){
    if (input.value.length < min){
        show_error(input, `${getName(input)} must be atleast ${min} characters`)
    }
    else if (input.value.length > max){
        show_error(input, `${getName(input)} must be less then ${max} characters`)
    }
    else{
        show_success(input);
    }
}

function getName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function pass_match(input1, input2){
    if (input1.value != input2.value)
    {
        show_error(input2 , "Did not match ! Re-try")
    }
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    checkLength(username, 3, 20)
    checkLength(password1, 6, 30)
    check_mail(mail)
    pass_match(password1, password2)
})