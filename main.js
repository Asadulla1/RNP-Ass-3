/*
1.Date Object:
a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.
b. Implement the function to display the day of the week for the current date.
*/
function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = date.getDay();
  const dayOfWeek = daysOfWeek[dayIndex];
  return dayOfWeek;
}
const date = "2023-06-20";
const dayOfWeek = getDayOfWeek(date);
console.log(dayOfWeek);
/*
2.Math Object:
a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
b. Implement the function to display the square root of the sum of squares for an array of numbers.
*/
function squareRootOfSumOfSquares(numbers) {
  const sumOfSquares = numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
  const squareRoot = Math.sqrt(sumOfSquares);
  return squareRoot;
}
const numbers = [1, 2, 3, 4, 5];
const result = squareRootOfSumOfSquares(numbers);
console.log(result);
/*
3.Numbers:
a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
b. Implement the function to check if a given positive integer is a prime number.
*/
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
const number = 12;
const isPrimeNumber = isPrime(number);
console.log(isPrimeNumber);

/*
4.Window Object:
a. Create a function that opens a new window with a specified URL and dimensions (width and height).
b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
*/
function openNewWindow(url, width, height) {
  const windowFeatures = `width=${width},height=${height}`;
  const newWindow = window.open(url, "_blank", windowFeatures);
  return newWindow;
}
const url = "https://www.example.com";
const width = 800;
const height = 600;
const newWindow = openNewWindow(url, width, height);

/*
5.Navigator Object:
a. Write a JavaScript function that detects the user's browser name and version using the navigator object.
b. Implement the function to display the user's browser name and version.
*/
function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = "";
  let browserVersion = "";

  if (userAgent.indexOf("Firefox") !== -1) {
    browserName = "Firefox";
    browserVersion = userAgent.substring(userAgent.indexOf("Firefox") + 8);
  } else if (userAgent.indexOf("Chrome") !== -1) {
    browserName = "Chrome";
    browserVersion = userAgent.substring(userAgent.indexOf("Chrome") + 7);
  } else if (userAgent.indexOf("Safari") !== -1) {
    browserName = "Safari";
    browserVersion = userAgent.substring(userAgent.indexOf("Version") + 8);
  } else if (
    userAgent.indexOf("MSIE") !== -1 ||
    userAgent.indexOf("Trident/") !== -1
  ) {
    browserName = "Internet Explorer";
    browserVersion = userAgent.substring(
      userAgent.indexOf("MSIE") + 5,
      userAgent.indexOf(";")
    );
  } else {
    browserName = "Unknown";
    browserVersion = "N/A";
  }

  return {
    browserName: browserName,
    browserVersion: browserVersion,
  };
}
const browserInfo = getBrowserInfo();
console.log(`Browser Name: ${browserInfo.browserName}`);
console.log(`Browser Version: ${browserInfo.browserVersion}`);
/*
6.Geolocation:
a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.
*/
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}
getCurrentLocation()
  .then((location) => {
    console.log("Latitude:", location.latitude);
    console.log("Longitude:", location.longitude);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

/*
7.JS Common Events:
Implement a webpage with the following functionality:
a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.
b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.
c. When the user moves the mouse over an image, change the image source to another image of your choice.
*/
function handlePageClick(event) {
  const x = event.clientX;
  const y = event.clientY;
  alert(`Clicked at coordinates (x, y): ${x}, ${y}`);
}
function handleKeyPress(event) {
  const keyCode = event.keyCode;
  alert(`Key pressed. Key code: ${keyCode}`);
}
function handleImageMouseOver(event) {
  event.target.src =
    "https://c4.wallpaperflare.com/wallpaper/670/707/626/eyes-black-background-red-digital-art-wallpaper-preview.jpg";
}
document.addEventListener("click", handlePageClick);
document.addEventListener("keypress", handleKeyPress);
/*
8.HTML DOM Document:
a. Create a webpage with a button and a paragraph element.
b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked.
*/
function handleClick() {
  const paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "Button Clicked!";
}

/*9. Ans:
 */
function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const errorContainer = document.getElementById("error-container");
  let isValid = true;
  let errorMessage = "";

  // Reset error messages
  errorContainer.innerHTML = "";

  // Name validation
  if (nameInput.value === "") {
    errorMessage += "Name is required.<br>";
    isValid = false;
  } else {
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(nameInput.value)) {
      errorMessage += "Name should contain only letters.<br>";
      isValid = false;
    }
  }

  // Email validation
  if (emailInput.value === "") {
    errorMessage += "Email is required.<br>";
    isValid = false;
  } else {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
      errorMessage += "Email should be a valid email address.<br>";
      isValid = false;
    }
  }

  // Password validation
  if (passwordInput.value === "") {
    errorMessage += "Password is required.<br>";
    isValid = false;
  } else {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
      errorMessage +=
        "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.<br>";
      isValid = false;
    }
  }

  // Confirm Password validation
  if (confirmPasswordInput.value === "") {
    errorMessage += "Confirm Password is required.<br>";
    isValid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    errorMessage += "Confirm Password should match the Password field.<br>";
    isValid = false;
  }

  // Display error messages
  if (!isValid) {
    errorContainer.innerHTML = errorMessage;
  }

  return isValid;
}
/*10.DOM Manipulate CSS Class:
a. Create a webpage with a button and a paragraph element.
b. Implement a JavaScript function that adds a CSS class named "highlight" to the paragraph element when the button is clicked. The "highlight" class should change the background color of the paragraph to yellow.
*/
function addHighlightClass() {
  const paragraph = document.getElementById("myParagraph2");
  paragraph.classList.add("highlight");
}
/*
11.Create Element & Append Element:
a. Create a webpage with an empty unordered list (<ul>).
b. Implement a JavaScript function that dynamically creates five list items (<li>) with sequential numbers (1 to 5) and appends them to the unordered list.
*/
function createListItems() {
  const ul = document.getElementById("myList");

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  }
}
/*
12.DOM Change Attribute Value:
a. Create a webpage with an image element (<img>) that has an initial source URL.
b. Implement a JavaScript function that changes the source URL of the image element when a button is clicked. Use a different image URL of your choice.
*/
function changeImageSource() {
  const image = document.getElementById("myImageSrc");
  image.src =
    "https://c4.wallpaperflare.com/wallpaper/165/383/672/halo-video-games-halo-infinite-xbox-wallpaper-preview.jpg";
}
/*
13.DOM Query Selector:
a. Create a webpage with multiple paragraphs containing different classes and IDs.
b. Implement a JavaScript function that selects all paragraphs with a specific class and changes their text color to red.
*/
function changeTextColor() {
  const paragraphs = document.querySelectorAll(".highlight2");

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
  }
}
/*
14.AJAX Get Request:
a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".
*/
function sendGetRequest() {
  axios
    .get("https://api.example.com/data")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

/*15.AJAX Post Request:
a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit".
b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }.*/
function sendPostRequest() {
  const url = "https://api.example.com/submit";
  const payload = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  axios
    .post(url, payload)
    .then((response) => {
      console.log(response.data);
      // Process the response data
    })
    .catch((error) => {
      console.error(error);
    });
}
