<?php
session_start();
if(!isset($_SESSION["admin"])){
    header("Location: http://127.0.0.1:8080/index.html");
    exit;
}
?>
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
<h1><a href = "http://127.0.0.1:8080/index.html">Doge Rentals oo</a></h1>
<main id="adminMain">
<?php
        $db_host   = '192.168.56.12';
        $db_name   = 'fvision';
        $db_user   = 'webuser';
        $db_passwd = 'insecure_db_pw';
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