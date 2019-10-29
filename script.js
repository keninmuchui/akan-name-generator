function akanName() {
  var maleArray = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];
  var femaleArray = ["Akosua", "Adwoa", "Abenaa", "AKua", "Yaa", "Afua", "Ama"];
  var daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);
  var male = document.getElementById("male");
  var female = document.getElementById("female");

  var day = new Date(year + "/" + month + "/" + day);
  var dob = day.getDay();

  if (male.checked == true) {
    alert(
      "you were born on " + daysArray[dob] + " and your akan name is " + maleArray[dob]
    );
  } else if (female.checked == true) {
    alert(
      "you were born on " + daysArray[dob] + " and your akan name is " + femaleArray[dob]
    );
  } else {
    alert("an error occured");
  }
}
