function convertTemperature() {
    var inputValue = document.getElementById("inputValue").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var resultElement = document.getElementById("result");

    var convertedValue;
    var resultText;

    if (inputUnit === "celsius") {
        convertedValue = (inputValue * 9/5) + 32;
        resultText = inputValue + "°C = " + convertedValue + "°F";
    } else if (inputUnit === "fahrenheit") {
        convertedValue = (inputValue - 32) * 5/9;
        resultText = inputValue + "°F = " + convertedValue + "°C";
    } else if (inputUnit === "kelvin") {
        convertedValue = inputValue - 273.15;
        resultText = inputValue + "K = " + convertedValue + "°C";
    }

    resultElement.innerHTML = resultText;
}
