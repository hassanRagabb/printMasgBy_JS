var inputEle = document.getElementById("input-text");//inputTexr
var buttonEle = document.getElementById("out");//button
var msgEle=document.getElementById("msg");

buttonEle.onclick = function printmsg(){   
    var inputval=inputEle.value;        // get input value
    

    if(inputval!="")
    {
        msgEle.innerHTML=inputval;      //print msg


        inputEle.value="";          //empty input 
    }
}
			