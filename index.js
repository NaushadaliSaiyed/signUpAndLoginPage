var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");


function $myLogin(){
    
    const data = JSON.parse(localStorage.getItem("myDataStorage")) || [];
    if(input1.value == data.email && input2.value == data.passWord){
        setTimeout(function(){
            alert("login successfully")

        },500)

    }else{
        setTimeout(function(){
            alert("user notcreat")
        },500)
    
    }

  
}