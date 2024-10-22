function convertTemperature() {
    let inputValue = parseFloat(document.querySelectorAll('.inputValue')[0].value);
    let inputUnit = document.querySelectorAll('.from-unit')[0].value;
    let outputUnit = document.querySelectorAll('.to-unit')[0].value;
    let outputValue;

   
    if (inputUnit === "Celsius" && outputUnit === "Fahrenheit") {
        outputValue = (inputValue * 9/5) + 32;
    } 
    else if (inputUnit === "Celsius" && outputUnit === "Kelvin") {
        outputValue = inputValue + 273.15;
    } 
    else if (inputUnit === "Fahrenheit" && outputUnit === "Celsius") {
        outputValue = (inputValue - 32) * 5/9;
    } 
    else if (inputUnit === "Fahrenheit" && outputUnit === "Kelvin") {
        outputValue = ((inputValue - 32) * 5/9) + 273.15;
    } 
    else if (inputUnit === "Kelvin" && outputUnit === "Celsius") {
        outputValue = inputValue - 273.15
    }
    else if (inputUnit === "Kelvin" && outputUnit === "Fahrenheit") {
        outputValue = ((inputValue - 273.15) * 9/5) + 32
    }

    document.querySelectorAll('.outputValue')[0].innerHTML = `Converted Temperature: ${outputValue} ${outputUnit}`;
}

convertTemperature();