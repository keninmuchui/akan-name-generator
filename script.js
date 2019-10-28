function akanName() {
  var maleArray = [
    "Kwasi",
    "Kwadwo",
    "Kwaku",
    "Kwabena",
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
  var male = document.getElementById("female");

  var day = new Date(year + "/" + month + "/" + day);
  var dateofbirth = day.getday();

  if (male.checked == true) {
    alert(
      "you were born on " +
        daysArray[day] +
        " and your akan name is " +
        maleArray(day)
    );
  } else if (female.checked == true) {
    alert(
      "you were born on " +
        daysArray[day] +
        " and your akan name is " +
        femaleArray(day)
    );
  } else {
    alert("an error occured");
  }
}
