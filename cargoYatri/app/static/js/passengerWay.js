document.addEventListener("DOMContentLoaded", () => {
    const nextBtn = document.getElementById("next-btn");
    const deliveryDateInput = document.getElementById("delivery-date");
    const slotSelection = document.getElementById("slot-selection");
    const productForm = document.getElementById("product-form");
    const passengerVerificationForm = document.getElementById("verification-form");
    const selfShipBtn = document.getElementById("self-ship-btn");
    const doorstepBtn = document.getElementById("doorstep-btn");
    const paymentCompleteBtn = document.getElementById("payment-complete-btn");
    const productDescription = document.getElementById("passenger-way");
    const passengerVerification = document.getElementById("passenger-verification");
    const modeOfOperation = document.getElementById("mode-of-operation");
    const paymentSection = document.getElementById("payment-section");
    const operationCompleted = document.getElementById("operation-completed");
    const dataTableBody = document.querySelector("#data-table tbody");
    const tableSection = document.getElementById("table-section");

    flatpickr("#delivery-date", {
      dateFormat: "d-m-Y", // dd-mm-yyyy format
      //minDate: "today",    // Prevent past dates
      maxDate: "31-12-2024", // Set a max date
    });

    //Step 0 : Slot selection
    nextBtn.addEventListener("click", () => {
        const selectedDate = deliveryDateInput.value;
        if (selectedDate) {
          slotSelection.style.display = "none";
          productDescription.style.display = "block";
        } else {
          alert("Please select a date before proceeding.");
        }
      });
  
    // Step 1: Product Description
     productForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const selectedDate = deliveryDateInput.value;
        const productDesc = document.getElementById("product-description").value;
        const packetContent = document.getElementById("packet-content").value;
        const packetWeight = document.getElementById("packet-weight").value;
        const packetType = document.getElementById("packet-type").value;

        if (selectedDate && productDesc && packetContent && packetWeight && packetType) {
        // Add a new row to the table
            const newRow = document.createElement("tr");

            newRow.innerHTML = `
                <td>${selectedDate}</td>
                <td>${productDesc}</td>
                <td>${packetContent}</td>
                <td>${packetWeight}</td>
                <td>${packetType}</td>
            `;

            dataTableBody.appendChild(newRow);

            productDescription.style.display = "none"
            tableSection.style.display = "block";
            passengerVerification.style.display = "block"
        }else{
            alert("Please fill in all the details.");
        }
    });
  
    // Step 2: Passenger Verification
    passengerVerificationForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const aadhaar = document.getElementById("aadhaar").value.trim();
        const contact = document.getElementById("contact").value.trim();
      
        // Validation flags
        let isValid = true;
      
        // Aadhaar validation (exactly 12 digits)
        if (!/^\d{12}$/.test(aadhaar)) {
          alert("Invalid Aadhaar Number! It must contain exactly 12 digits.");
          isValid = false;
        }
      
        // Contact number validation (10 digits starting with [6-9])
        if (!/^[6-9]\d{9}$/.test(contact)) {
          alert("Invalid Contact Number");
          isValid = false;
        }
      
        // If all fields are valid, proceed
        if (isValid) {
          alert("Passenger verified successfully!");
          passengerVerification.style.display = "none";
          modeOfOperation.style.display = "block"; 
        }
    });
      
  
        // Step 3: Mode of Operation
        selfShipBtn.addEventListener("click", () => {
        modeOfOperation.style.display = "none";
        paymentSection.style.display = "block";
        });
    
        doorstepBtn.addEventListener("click", () => {
        modeOfOperation.style.display = "none";
        paymentSection.style.display = "block";
        });
    
        // Step 4: Payment
        paymentCompleteBtn.addEventListener("click", () => {
        paymentSection.style.display = "none";
        operationCompleted.style.display = "block";
        });
  });
  