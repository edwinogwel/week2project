
function myfunction(){
    var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleAkanNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var date = document.myform.date.value;
    //if it doesn't work comment out next line and try again
    var gender = document.getElementsByName ("gender");
    var dayOfBirth = new Date(date);
    var theDay = dayOfBirth.getDay();
//*uncomment if needed later*//document.getElementById("message").innerHTML = "The day is " + theDay + "!";

alert(theDay)
}
  