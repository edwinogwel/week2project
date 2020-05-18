function myfunction() {
  event.preventDefault();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var date = document.getElementById("date").value;
  var gender = document.getElementsByName("gender");
  var dayOfBirth = new Date(date);
  var theDay = dayOfBirth.getDay();

  for (var i = 0; i <= gender.length; i++) {
    if (gender[i].checked) {
      if (gender[i].value === "male") {
        document.getElementById('message').innerHTML = "Being " + gender[i].value + " your Akan name is " + maleAkanNames[theDay];
      }
      else {
        document.getElementById('message').innerHTML = "Being " + gender[i].value + " your Akan name is " + femaleAkanNames[theDay];
      }
    }
    else {

   }
  }
}