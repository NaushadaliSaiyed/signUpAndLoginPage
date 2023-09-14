var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

function $mySubmit(){

    const data = {
        email: input1.value,
        passWord: input2.value,
    };

    localStorage.setItem('myDataStorage',JSON.stringify(data))
    myFunction()
}


function myFunction() {
    if(input1.value == "" && input2.value == ""){
        localStorage.setItem('myDataStorage',JSON.stringify(""))

    }
}