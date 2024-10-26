<!DOCTYPE html>
<html lang="ur">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Approval Script</title>
</head>
<body>
    <h1>Welcome to the Approval Page</h1>
    
    <p>Kripya apne username aur password daalain:</p>
    
    <form id="approvalForm">
        <label for="username">GURU</label>
        <input type="text" id="username" required><br><br>
        
        <label for="password">GURU12:</label>
        <input type="password" id="password" required><br><br>
        
        <button type="submit">Submit</button>
    </form>

    <div id="message"></div>

    <script>
        const correctUsername = "GURU";
        const correctPassword = "GURU12";

        document.getElementById('approvalForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === correctUsername && password === correctPassword) {
                document.getElementById('message').innerHTML = 'Aap ka approval ho gaya hai! WhatsApp par contact karke hum se baat karein.';
                // Yahan aap jaise chahain actions perform kar sakte hain.
                // For example, redirect to another page or show options.
            } else {
                document.getElementById('message').innerHTML = 'Galat username ya password! Dobara koshish karein.';
            }
        });
    </script>
</body>
</html>
