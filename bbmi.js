// Add event listener to the "Calculate" button
document.getElementById("calculate-btn").addEventListener("click", function () {
    // Retrieve input values
    const heightFeet = parseFloat(document.getElementById("height-feet").value) || 0;
    const heightInches = parseFloat(document.getElementById("height-inches").value) || 0;
    const weight = parseFloat(document.getElementById("weight").value) || 0;
  
    // Validate input values
    if (heightFeet <= 0 && heightInches <= 0) {
      alert("Please enter a valid height.");
      return;
    }
  
    if (weight <= 0) {
      alert("Please enter a valid weight.");
      return;
    }
  
    // Calculate total height in inches
    const totalHeightInches = (heightFeet * 12) + heightInches;
  
    // Calculate BMI using the formula
    const bmi = ((weight / (totalHeightInches * totalHeightInches)) * 703).toFixed(2);
  
    // Determine BMI status
    let status = "";
    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      status = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      status = "Overweight";
    } else {
      status = "Obese";
    }
  
    // Display the result
    document.getElementById("bmi-value").textContent = `Your BMI is: ${bmi}`;
    document.getElementById("bmi-status").textContent = `Status:${status}`;
});
