<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Doge Rental Admin</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <style>
    th { text-align: left; }
    table, th, td {
        border: 2px solid grey;
        border-collapse: collapse;
    }
    th, td {
        padding: 0.2em;
        }
    </style>
</head>
<body>
<main id="adminMain">
<?php
        $db_host   = 'cosc349-a2-database.cbqblifw4slt.us-east-1.rds.amazonaws.com';
        $db_name   = 'bookingsdb';
        $db_user   = 'admin';
        $db_passwd = 'stesh969';
        $pdo_dsn = "mysql:host=$db_host;dbname=$db_name";
        $pdo = new PDO($pdo_dsn, $db_user, $db_passwd);
        $q = $pdo->query("SELECT * FROM bookings");
        $row = $q->fetch();
        if(count($row) == 1){
            echo "<p style='font-size: 40px; text-align: center;'>There are currently no bookings</p>";
            echo "</br>";
        }else{
            echo "<p style='margin-Bottom: 100px; font-size: 50px; margin-Top: 0px; font-weight: bold'>Bookings:</p>";
            echo "</br>";
            echo "<table border='1' style='background-color: white'>";
            echo "<tr><th>Name</th><th>Dogs</th><th>Booking Date</th><th>Hours</th></tr>";

            do{
                echo "<tr><td>".$row["customer_name"]."</td><td>".$row["dogs"]."</td><td>".$row["booking_date"]."</td><td>".$row["booking_hours"]."</td></tr>\n";
            } while($row = $q->fetch());

            echo "</table>";
            echo "</br style='margin-Bottom: 150px'>";

        }
        ?>
</main>
</body>
</html>