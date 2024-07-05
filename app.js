// This is just to confirm that the app.js file is working correctly
console.log("Hello World!");

/* This is written in a very rudimentary way: only useful for doing this one speific thing that is changing these
specific images in the background */

let function_run = 0;

// Function to change the background image of the section with id "homepage"
function changeImage() {
  var home_page = document.getElementById("home_page");
  var currentImage = home_page.style.backgroundImage;

  // Add a popup alert to confirm that the button was clicked and the function was called:
  if (function_run == 0) {
    alert("There may be some delay, please click again if nothing happened!");
    function_run += 1;
    console.log("function run:");
  }

  // Check the current image URL to decide which one to toggle
  if (currentImage.includes("sun.jpg")) {
    home_page.style.backgroundImage = "url('./Sun_pics/sun2.jpg')";
  } else {
    home_page.style.backgroundImage = "url('./Sun_pics/sun.jpg')";
  }

  var about_page = document.getElementById("about_page");
  var currentImage = about_page.style.backgroundImage;

  // Check the current image URL to decide which one to toggle
  if (currentImage.includes("mercury.jpg")) {
    about_page.style.backgroundImage = "url('./Mercury_pics/mercury2.jpg')";
  } else {
    about_page.style.backgroundImage = "url('./Mercury_pics/mercury.jpg')";
  }

  var contact_page = document.getElementById("contact_page");
  var currentImage = contact_page.style.backgroundImage;

  // Check the current image URL to decide which one to toggle
  if (currentImage.includes("venus.jpg")) {
    contact_page.style.backgroundImage = "url('./Venus_pics/venus2.jpg')";
  } else {
    contact_page.style.backgroundImage = "url('./Venus_pics/venus.jpg')";
  }
}

// Add event listener to the button with id "image_button"
document.getElementById("image_button").addEventListener("click", changeImage);
