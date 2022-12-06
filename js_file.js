function validateFirstName() {
  var firstName = document.getElementById("first-name").value;
  var firstNameError = document.getElementById("first-name-error");

  if (firstName.length < 1 || firstName.length > 30) {
    firstNameError.textContent = "First name must be between 1 and 30 characters";
    return false;
  } else if (!/^[a-zA-Z'-]+$/.test(firstName)) {
    firstNameError.textContent = "First name must contain letters, apostrophes, and dashes only";
    return false;
  } else {
    firstNameError.textContent = "";
    return true;
  }
}

function validateMiddleInitial() {
  var middleInitial = document.getElementById("middle-initial").value;
  var middleInitialError = document.getElementById("middle-initial-error");

  if (middleInitial.length !== 1 || !/^[a-zA-Z]$/.test(middleInitial)) {
    middleInitialError.textContent = "Middle initial must be 1 letter, no numbers";
    return false;
  } else {
    middleInitialError.textContent = "";
    return true;
  }
}

function validateLastName() {
  var lastName = document.getElementById("last-name").value;
  var lastNameError = document.getElementById("last-name-error");

  if (lastName.length < 1 || lastName.length > 30) {
    lastNameError.textContent = "Last name must be between 1 and 30 characters";
    return false;
  } else if (!/^[a-zA-Z'-]+$/.test(lastName)) {
    lastNameError.textContent = "Last name must contain letters, apostrophes, and dashes only";
    return false;
  } else {
    lastNameError.textContent = "";
    return true;
  }
}

function validateDOB() {
  var dob = document.getElementById("dob").value;
  var dobError = document.getElementById("dob-error");

  var dobRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dobRegex.test(dob)) {
    dobError.textContent = "Date of birth must be in the format MM/DD/YYYY";
    return false;
  }

  var dobParts = dob.split("/");
  var month = parseInt(dobParts[0]);
  var day = parseInt(dobParts[1]);
  var year = parseInt(dobParts[2]);

  var currentYear = new Date().getFullYear();
  if (year < currentYear - 120 || year > currentYear || month < 1 || month > 12 || day < 1 || day > 31) {
    dobError.textContent = "Date of birth must be a valid date range";
    return false;
