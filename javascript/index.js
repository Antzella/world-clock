//Los Angeles
function updateLosAngelesTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM, Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateLosAngelesTime();
setInterval(updateLosAngelesTime, 1000);

//Paris
function updateBrisbaneTime() {
  let brisbaneElement = document.querySelector("#brisbane");
  if (brisbaneElement) {
    let brisbaneDateElement = brisbaneElement.querySelector(".date");
    let brisbaneTimeElement = brisbaneElement.querySelector(".time");
    let brisbaneTime = moment().tz("Australia/Brisbane");
    brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM, Do YYYY");
    brisbaneTimeElement.innerHTML = brisbaneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM, Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small>
          </div>
        </div>`;
}

updateBrisbaneTime();
setInterval(updateBrisbaneTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
