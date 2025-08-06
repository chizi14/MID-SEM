// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {

  // Skip the number 5 using 'continue'
  if (i === 5) {
    console.log("Skipping number 5");
    continue; // This skips the rest of the loop for i = 5
  }

  // Stop the loop completely when i equals 8
  if (i === 8) {
    console.log("Stopping the loop at 8");
    break; // This exits the loop entirely
  }

  // Print the current number
  console.log("Number:", i);
}
