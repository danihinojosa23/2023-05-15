function converterTemperatura() {
    var input = document.getElementById('fahrenheit').value;
    var fahrenheit = parseFloat(input);
    
    if (isNaN(fahrenheit)) {
      document.getElementById('result').innerText = 'Digite um valor válido.';
      return;
    }
    
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('result').innerText = 'Temperatura em Celsius: ' + celsius.toFixed(2);
    
    if (celsius > 30) {
      document.body.style.backgroundColor = 'orange';
    } else {
      document.body.style.backgroundColor = 'lightblue';
    }
  }