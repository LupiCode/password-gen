document.addEventListener('DOMContentLoaded', function () {
    // Function to get the time of day and display a dynamic greeting
    function updateGreeting() {
        const hours = new Date().getHours();
        const greeting = document.getElementById("greeting");

        if (hours < 12) {
            greeting.textContent = "Good morning!";
        } else if (hours < 18) {
            greeting.textContent = "Good afternoon!";
        } else {
            greeting.textContent = "Good evening!";
        }

        // Start the "Need a password?" animation after the greeting
        setTimeout(function() {
            document.getElementById('message').textContent = "Need a STRONG PASSWORD?";
            setTimeout(function() {
                document.getElementById('message').textContent = "I GOT YOU! 😉";
            }, 1000);
        }, 2000);
    }

    // Function to generate the password
    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/|";
        let password = "";
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password;
    }

    // Handle form submission
    const form = document.getElementById('generate-btn');
    form.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default button click behavior
        const length = parseInt(document.getElementById('length').value);
        const password = generatePassword(length);

        // Show the message and the generated password
        document.getElementById('generated-message').style.display = 'block';
        document.getElementById('password-output').style.display = 'block';
        document.getElementById('generated-password').textContent = password;
    });

    // Update greeting on page load
    updateGreeting();
});
