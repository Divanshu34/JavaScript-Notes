function animateString(id){
    debugger;
    // let string = "w3resources";
    // document.getElementById(id).innerHTML = string;
    let string = document.getElementById(id);
    let textNode = string.childNodes[0];
    let text = textNode.data;
    setInterval(function(){
        text = text[text.length -1] + text.substring(0, text.length-1);
        textNode.data = text;
    },100)
}

// function stop(){
//     string = document.getElementById(id);
    
// }