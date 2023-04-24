function calculateAge() {
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
  
    // Check if the input values are valid
    if (date < 1 || date > 31 || month < 1 || month > 12 || year < 1900 || year > 9999) {
      // Clear previous result
      document.getElementById("result").innerHTML = "";
      // Show prompt to enter a proper value
      if (date < 1 || date > 31) {
        alert("Please enter a valid date (1-31).");
      } else if (month < 1 || month > 12) {
        alert("Please enter a valid month (1-12).");
      } else if (year < 1900 || year > 9999) {
        alert("Please enter a valid year (1900-9999).");
      }
      return;
    }
    
    var today = new Date();
    var birthDate = new Date(year, month - 1, date);
  
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        m += 12;
    }
    var d = today.getDate() - birthDate.getDate();
  
    var result = "Your age is " + age + " years, " + m + " months, and " + d + " days.";
    document.getElementById("result").innerHTML = result;
  }
  
  function limitInputLength() {
    const dateInput = document.getElementById("date");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
  
    dateInput.addEventListener("input", function() {
      if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
      }
    });
  
    monthInput.addEventListener("input", function() {
      if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
      }
    });
  
    yearInput.addEventListener("input", function() {
      if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
      }
    });
  }
  
  limitInputLength();
  