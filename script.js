const contactUsLink = document.getElementById("contact-us-link");

    contactUsLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "mailto:sharma.max34@gmail.com"; 
    });