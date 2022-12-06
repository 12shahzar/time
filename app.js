

setInterval(() => {
    var d=new Date();
hour =d.getHours();
min = d.getMinutes();
sec = d.getSeconds();
if(hour<12)
{
    g="AM";
    
    document.getElementById('i').src="brightness-high-fill.svg";
    document.getElementById("main").style.background = "linear-gradient(whitesmoke,yellow,orange)";
    
    
}
else
{
    g="PM"
    document.getElementById('i').src="moon-fill.svg";
}

time = hour+":"+ min +":"+ sec +" "+g; 
document.getElementById("display").innerText=time;

}, 1000);

