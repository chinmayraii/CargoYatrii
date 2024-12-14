
document.addEventListener("DOMContentLoaded", function () {
  const nextBtn = document.getElementById("next-btn");
  const deliveryDateInput = document.getElementById("delivery-date");
  const slotSelection = document.getElementById("slot-selection");
  const expressWay = document.getElementById("express-way");
  const expressForm = document.getElementById("express-form");
  const tableSection = document.getElementById("table-section");
  const modeOfOperation = document.getElementById("mode-of-operation");
  const selfShipBtn = document.getElementById("self-ship-btn");
  const doorstepBtn = document.getElementById("doorstep-btn");
  const paymentSection = document.getElementById("payment-section");
  const paymentCompleteBtn = document.getElementById("payment-complete-btn");
  const operationCompleted = document.getElementById("operation-completed");
  const dataTableBody = document.querySelector("#data-table tbody");
// Date Picker
  flatpickr("#delivery-date", {
    dateFormat: "d-m-Y", // dd-mm-yyyy format
    //minDate: "today",    // Prevent past dates
    maxDate: "31-12-2024", // Set a max date
  });

  // Handle "Next" button click
  nextBtn.addEventListener("click", () => {
    const selectedDate = deliveryDateInput.value;
    if (selectedDate) {
      slotSelection.style.display = "none";
      expressWay.style.display = "block";
    } else {
      alert("Please select a date before proceeding.");
    }
  });

  // Handle form submission
  expressForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const selectedDate = deliveryDateInput.value;
    const productDescription = document.getElementById("product-description").value;
    const packetContent = document.getElementById("packet-content").value;
    const packetWeight = document.getElementById("packet-weight").value;
    const packetType = document.getElementById("packet-type").value;

    if (selectedDate && productDescription && packetContent && packetWeight && packetType) {
      // Add a new row to the table
      const newRow = document.createElement("tr");

      newRow.innerHTML = `
        <td>${selectedDate}</td>
        <td>${productDescription}</td>
        <td>${packetContent}</td>
        <td>${packetWeight}</td>
        <td>${packetType}</td>
      `;

      dataTableBody.appendChild(newRow);

      expressWay.style.display = "none";
      tableSection.style.display = "block";
      modeOfOperation.style.display = "block";
      } else {
        alert("Please fill in all the details.");
      }
    });

  // Handle "Self Ship" button click
    selfShipBtn.addEventListener("click", () => {
      modeOfOperation.style.display = "none";
      paymentSection.style.display = "block";
    });

    // Handle "Doorstep" button click
    doorstepBtn.addEventListener("click", () => {
      modeOfOperation.style.display = "none";
      paymentSection.style.display = "block";
    });

    // Handle "Complete Payment" button click
    paymentCompleteBtn.addEventListener("click", () => {
      paymentSection.style.display = "none";
      operationCompleted.style.display = "block";
    });


});
