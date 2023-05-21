function calculate() {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
  
        var operation = document.getElementById("operation").value;
        var result;
  
        if (operation === "add") {
          result = num1 + num2;
        } else if (operation === "subt") {
          result = num1 - num2;
        } else if (operation === "mul") {
          result = num1 * num2;
        } else if (operation === "div") {
          if (num2 === 0) {
            result = "Error: Division by zero";
          } else {
            result = num1 / num2;
          }
        }
  
        document.getElementById("result").innerHTML = "Result: " + result;
      }