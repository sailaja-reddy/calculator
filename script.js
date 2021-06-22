
function operator(ope)
{

    var a=parseFloat(document.getElementById('numb1').value);
    var b=parseFloat(document.getElementById('numb2').value);
    var regx=(/^-?\d*(\.\d+)?$/);
    
    if(document.getElementById('numb1').value.match(regx) && document.getElementById('numb2').value.match(regx))
    {

    if(ope===1)
        var result = a+b;

    else if(ope===2)
        var result=a-b;

    else if(ope===3)
        var result=a*b;

    else if(ope===4)
        var result=a/b;

    else if(ope===5)
        var result=a%b;

   else if(ope===6)
       var result=Math.pow(a,b);
    document.getElementById('res').value=result;
    
    }
    else
    {
    alert("not valid number given");
    }
}
function resetform()
{
    document.getElementById('numb1').value="";
    document.getElementById('numb2').value="";
    document.getElementById('res').value="";


}