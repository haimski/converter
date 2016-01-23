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

