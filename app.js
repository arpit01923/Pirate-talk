var btnClick=document.querySelector("#i1");
var textInput=document.querySelector("#i2");
var divOutput=document.querySelector("#i3");
var serverURL="https://api.funtranslations.com/translate/pirate.json";

function getURL(text){
    return serverURL+"?text="+text;
}

function errorHandler(){
    alert("Something went wrong");
}

function clickHandler(event){
    //console.log("clicked!!!")
    //divOutput.innerText=textInput.value;
    fetch(getURL(textInput.value))
    .then(response=>response.json())
    .then(json=>{divOutput.innerText=json.contents.translated})
    .catch(errorHandler);
};
btnClick.addEventListener("click",clickHandler)