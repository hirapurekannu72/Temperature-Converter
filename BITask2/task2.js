document.getElementById("convert-button").addEventListener("click", function() {

    const temperature = parseFloat(document.getElementById("input-temperature").value);
    const unit = document.getElementById("input-unit").value;
  
    let result;
    if (unit === "celsius") {
      result = (temperature * 9/5) + 32;
    } else {
      result = (temperature - 32) * 5/9;
    }
    document.getElementById("output").textContent = `Result: ${result.toFixed(2)} ${unit === "celsius" ? "°F" : "°C"}`;
  });