function myfunction() { 
  event.preventDefault();
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
      var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
      var date = document.getElementById("date").value;
      var gender = document.getElementsByName("gender");
      var dayOfBirth = new Date(date);
      var theDay = dayOfBirth.getDay();
      document.getElementById("message").innerHTML = "The day is " + days[theDay];
      alert(day)
    }
  