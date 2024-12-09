//Los Angeles
function updateLosAngelesTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM, Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateLosAngelesTime();
setInterval(updateLosAngelesTime, 1000);

//Paris
function updateBrisbaneTime() {
  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDateElement = brisbaneElement.querySelector(".date");
  let brisbaneTimeElement = brisbaneElement.querySelector(".time");
  let brisbaneTime = moment().tz("Australia/Brisbane");
  brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM, Do YYYY");
  brisbaneTimeElement.innerHTML = brisbaneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateBrisbaneTime();
setInterval(updateBrisbaneTime, 1000);
