/**
 * Created by haimb on 1/20/2016.
 */

(function(){
    var inputBox = document.getElementById("inputBox");
    var outputBox = document.getElementById("outputBox");
    var conversionChoice = document.getElementById("conversionChoice");
    var conversionButton = document.getElementById("conversionBtn");
    //console.log(inputBox+" : "+outputBox+" : "+conversionChoice+" : "+conversionButton)
    function converter(){
        var reg = new RegExp('^[0-9]+$');
        if(!reg.test(inputBox.value)){
            alert("Input Invalid");
            return false;
        }else{
            switch(conversionChoice.value){
                case "KMToMiles":
                    outputBox.value = (inputBox.value*0.62137119)+inputBox.value;
                    break;
                case "MilesToKM":
                    outputBox.value = (inputBox.value/0.62137119)+inputBox.value;
                    break;
                case "InchToCM":
                    outputBox.value = (inputBox.value/0.39370)+inputBox.value;
                    break;
                case "CMToInch":
                    outputBox.value = (inputBox.value*0.39370)+inputBox.value;
                    break;
                case "CelsiusToFahrenheit":
                    outputBox.value = ((inputBox.value*1.8)+32)+inputBox.value;
                    break;
                case "FahrenheitToCelsius":
                    outputBox.value = (((inputBox.value-32)*5)/9)+inputBox.value;
                    break;
            }
        }
    }

    conversionButton.addEventListener("click", converter);
}());

/*(function(){
    var toMilesBtn = document.getElementById("kmToMiles");
    var toKmBtn = document.getElementById("milesToKm");

    var toFahrenheitBtn = document.getElementById("celsiusToFarenheit");
    var toCelsiusBtn = document.getElementById("fahrenheitToCelsius");

    var toCmBtn = document.getElementById("inchToCm");
    var toInchBtn = document.getElementById("cmTInch");

    function validateInput(elem){
        var reg = new RegExp('^[0-9]+$');
        if(!reg.test(elem.value)){
            alert("Input Invalid");
            return false;
        }else{
            return true;
        }
    }

    function getDistance()
    {
        validateInput(document.getElementById("distance"));
        alert("distance")
    }

    function getSize()
    {
        validateInput(document.getElementById("size"));
        alert("size")
    }

    function getTemprature()
    {
        validateInput(document.getElementById("temperature"));
        alert("temperature")
    }

    if(toMilesBtn){
        toMilesBtn.addEventListener("click", getDistance, false);
        toKmBtn.addEventListener("click", getDistance, false);
    }
    if(toFahrenheitBtn){
        toFahrenheitBtn.addEventListener("click", getTemprature, false);
        toCelsiusBtn.addEventListener("click", getTemprature, false);
    }
    if(toCmBtn){
        toCmBtn.addEventListener("click", getSize, false);
        toInchBtn.addEventListener("click", getSize, false);
    }


})();*/


