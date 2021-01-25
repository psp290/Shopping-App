


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



function favourite(i){
    

    let text = document.getElementsByClassName('favorite-item')[i].style.color;
    console.log(text);
    if(text=="gray")
    {
        document.getElementsByClassName('favorite-item')[i].style="color:red;";
    }
    else
    {
        document.getElementsByClassName('favorite-item')[i].style="color:gray;";   
    }
}

function cart(i){
    

    let text = document.getElementsByClassName('cart-item')[i].style.color;
    console.log(text);
    if(text=="gray")
    {
        document.getElementsByClassName('cart-item')[i].style="color:rgb(35, 192, 35);";
    }
    else
    {
        document.getElementsByClassName('cart-item')[i].style="color:gray;";   
    }
}