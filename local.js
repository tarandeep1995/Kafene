// Check if loginStatus is stored in localStorage
if(localStorage.getItem("loginStatus")) {
    // Retrieve the loginStatus value
    var status = localStorage.getItem("loginStatus");

    // Check if the loginStatus is false (user is not logged in)
    if (!JSON.parse(status)) {
        // Redirect to the login page
        location.replace("./login.html");
    }
} else {
    // If loginStatus is not found in localStorage, redirect to the login page
    location.replace("./login.html");
}
// Event handler for the Logout link in the right-part section
$("#right-part > a").click(() => {
    // Retrieve the loginStatus value or set it to 0 if not found
    var status = localStorage.getItem("loginStatus") ? localStorage.getItem("loginStatus") : 0;

    // Check if the user is logged in (loginStatus is true)
    if (JSON.parse(status)) {
        // Set loginStatus to false (user is logged out)
        localStorage.setItem("loginStatus", false);
    }
});
