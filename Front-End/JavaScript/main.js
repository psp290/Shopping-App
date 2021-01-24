


function changemode(){
    var mybody = document.body;
    mybody.classList.toggle('darkbg');
    let text = document.getElementById('changemode').value;
    
    if(text=="Light Mode")
    {
        document.getElementById('changemode').value="Dark Mode";
        document.getElementById('changemode').style="color:white;margin-top: 10px;";
        document.getElementById('changemode').style="background-color:black;margin-top: 10px;";
    }
    else
    {
        document.getElementById('changemode').value="Light Mode";
        document.getElementById('changemode').style="color:black;margin-top: 10px;";
        
    }
}