function converterTemperatura() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
    var resultado = "Fahrenheit: " + fahrenheit.toFixed(2) + "°F<br>"
                     + "Kelvin: " + kelvin.toFixed(2) + "K";
    document.getElementById("resultado").innerHTML = resultado;
}