document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const address = document.getElementById("address").value.trim();
  
    // Validation
    if (!validateName(name)) {
      alert("Invalid name! Name must be at least 2 characters long.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid email address!");
      return;
    }
    if (age <= 0) {
      alert("Age must be greater than 0!");
      return;
    }
    if (!validateMobile(mobile)) {
      alert("Invalid mobile number! Must be 10 digits.");
      return;
    }
    if (address.length < 10) {
      alert("Address must be at least 10 characters long.");
      return;
    }
  
    // If all validations pass, show success message
    document.getElementById("success-message").classList.remove("hidden");
  });
  
  // Validation functions
  function validateName(name) {
    return name.length >= 2; // Name must have at least 2 characters
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validateMobile(mobile) {
    const mobileRegex = /^[0-9]{10}$/; // Only digits, exactly 10
    return mobileRegex.test(mobile);
  }
  