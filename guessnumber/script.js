let storage = ()=>{
    // localStorage.setItem("score",9);
    // let getnumber = localStorage.getItem("score");
    // getnumber = Number(getnumber)
    // console.log(getnumber);
    // if(getnumber === 10){
    //     localStorage.setItem("score",(getnumber + 10));
    //     // console.log(getnumber + 10);
    // }

    const myArrayObj = [{name: "John", age: 31, city: "New York"}];
    const myjson = JSON.stringify(myArrayObj);
    localStorage.setItem("testjson",myjson);

    let getingdata = localStorage.getItem("testjson")
    let obj = JSON.parse(getingdata)
    let name = obj[0].name
    console.log(name);
}

storage()




var number = document.querySelector(".number");
var guess = document.querySelector(".guess");
var bodybgcolor = document.body;
var randomnum;


let getrandomnumer = () =>{
    randomnum = Math.floor(Math.random()*(20 -1+1))+1 ;
    number.innerHTML = randomnum;
}
 let checknumber = () =>{
    var guessvalue = Number(guess.value)
    if(guessvalue === randomnum){
        console.log("same");
        guess.value = "";
        bodybgcolor.style.background = "green";
        getrandomnumer();
        
    }else{
        console.log("Worng");
    }

    
 }







getrandomnumer();

