"use strict"

const id = document.querySelector("#id"),
 pwd = document.querySelector("#pwd"),
 btn = document.querySelector("button");

btn.addEventListener("click",login);
function login(){
    const req = {
        id : id.value,
        pwd : pwd.value,
    };
    console.log(req,JSON.stringify(req));
    // fetch("/login",{
    //     method : "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(req)
    // });
}