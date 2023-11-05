// Existing code

const admissionForm = document.getElementById("admissionForm");
const admissionButton = document.getElementById("admissionButton");
const dashboard = document.getElementById("dashboard");
const patientForm = document.getElementById("patientForm");
const bedDisplay = document.getElementById("bedDisplay");
const backToAdmissionButton = document.getElementById("backToAdmissionButton");

// Initialize bed counts
let icuBeds = 10;
let idBeds = 10;
let generalBeds = 20;

admissionButton.addEventListener("click", () => {
  admissionForm.style.display = "block";
  admissionButton.style.display = "none";
  dashboard.style.display = "none";
  resetBedStatuses(); // Reset bed statuses when opening the admission form
});

backToAdmissionButton.addEventListener("click", () => {
  admissionForm.style.display = "block";
  admissionButton.style.display = "block"; // Show the "Admit Patient" button
  dashboard.style.display = "none";
  resetBedStatuses();
});

patientForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const patientCategory = document.getElementById("patientCategory").value;
  let bedNo = 0;
  let status = "Waiting List";

  if (patientCategory === "ICU" && icuBeds > 0) {
    bedNo = 11 - icuBeds;
    icuBeds--;
    status = "Admitted";
  } else if (patientCategory === "ID" && idBeds > 0) {
    bedNo = 11 - idBeds;
    idBeds--;
    status = "Admitted";
  } else if (patientCategory === "General" && generalBeds > 0) {
    bedNo = 21 - generalBeds;
    generalBeds--;
    status = "Admitted";
  }

  const bedElement = document.querySelector(`.${patientCategory}.bed.green`);
  if (bedElement) {
    bedElement.textContent = `Bed ${bedNo}`;
    bedElement.classList.remove("green");
    bedElement.classList.add("red");
  }

  bedDisplay.textContent = `Bed No: ${bedNo} - Status: ${status}`;
  admissionForm.style.display = "none";

  dashboard.style.display = "block";
  admissionButton.style.display = "none";
});

// Function to reset bed statuses to green
function resetBedStatuses() {
  icuBeds = 10;
  idBeds = 10;
  generalBeds = 20;
}

// Initialize bed boxes for each ward
function createBedBoxes(bedCount, category, color) {
  const beds = document.querySelector(`#${category}Beds`);
  for (let i = 1; i <= bedCount; i++) {
    const bedBox = document.createElement("div");
    bedBox.classList.add("bed", category, color);
    bedBox.textContent = `Bed ${i}`;
    beds.appendChild(bedBox);
  }
}

// Initialize bed boxes
createBedBoxes(10, "icu", "green");
createBedBoxes(10, "id", "green");
createBedBoxes(20, "general", "green");

//To Reset all the value entered previously
function resetForm() {
  document.getElementById("patientName").value = "";
  document.getElementById("patientNRIC").value = "";
  document.getElementById("patientGender").value = "Male";
  document.getElementById("patientDOB").value = "";
  document.getElementById("patientAge").value = "";
  document.getElementById("patientAddress").value = "";
  document.getElementById("patientCategory").value = "ICU";
}

function backToAdmission() {
  dashboard.style.display = "none";
  admissionForm.style.display = "block";
  resetForm(); // Clear the form inputs
  admissionButton.style.display = "none"; // Hide the "Patient Admission" button
}













