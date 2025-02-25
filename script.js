
    
    const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("incrementBtn");    // Initialize counter value
    let counter = 0;

    // Function to handle button click
    incrementButton.addEventListener("click", () => {
      // Display alert with the current counter value (before increment)
      alert(`Current value: ${counter}`);

      // Increment the counter
      counter++;

      // Update the displayed counter value
      counterElement.textContent = counter;
    });
