// Prevent the default form submission behavior
$("form").submit((e) => {
    e.preventDefault();
});


// Event handler for form submission using the "on" method
$("form").on("submit", () => {
    // Check if the entered passwords match
    if ($("input")[0].value === $("input")[1].value) {
        // Create an object to store username and password
        var obj = {};
        obj.username = $("input")[0].value;
        obj.password = $("input")[1].value;

        // Send a POST request to the login API
        $.post("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login", obj, () => {
            // Alert and redirect on successful login
            alert("Login Successful");
            location.replace("./index.html");
            
            // Set the login status in localStorage to true
            localStorage.setItem("loginStatus", true);
        }).fail(() => {
            // Alert and redirect even if API post fails
            alert("Api post failed...still redirecting to the main page");
            location.replace("./index.html");
            
            // Set the login status in localStorage to true (assuming login success for redirection)
            localStorage.setItem("loginStatus", true);
        });
    } else {
        // Alert if passwords do not match
        alert("Please enter valid credentials");
    }
});
