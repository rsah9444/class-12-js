function validateForm() {
    // Get the values of the input fields
    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
  
    // Check if name is empty or only contains spaces
    if (name === "") {
      alert("Name field cannot be empty.");
      return false;
    }
  
    // Check if password is at least 8 characters long
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
  
    // Check if email is empty
    if (email === "") {
      alert("Email field cannot be empty.");
      return false;
    }
  
    // Check if phone number is empty or less than 10 characters long
    if (phone === "" || phone.length < 10) {
      alert("Please enter a valid phone number.");
      return false;
    }
  
    // If all input fields are valid, submit the form
    return true;
  }
  