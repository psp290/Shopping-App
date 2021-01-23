


function changemode(){
    var mybody = document.body;
    mybody.classList.toggle('darkbg');
    let text = document.getElementById('changemode').value;
    
    if(text=="Light Mode")
    {
        document.getElementById('changemode').value="Dark Mode";
        document.getElementById('changemode').style="color:white";
        document.getElementById('changemode').style="background-color:black";
    }
    else
    {
        document.getElementById('changemode').value="Light Mode";
        document.getElementById('changemode').style="color:black";
        
    }
}