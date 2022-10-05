<?php
header("Location: dogs.php");

if (isset($_POST['submit'])){
    $db_host   = 'cosc349-a2-database.cbqblifw4slt.us-east-1.rds.amazonaws.com';
    $db_name   = 'bookingsdb';
    $db_user   = 'admin';
    $db_passwd = 'stesh969';

    // Create connection
    $conn = mysqli_connect($db_host, $db_user, $db_passwd, $db_name, 3306);
    if (!$conn) {

        die("Connection failed: " . mysqli_connect_error());
    }
    $test = var_export($conn, true);
    echo "<p>$test</p>";
            
    $dogs = json_decode($_POST['dogs']);

    $dateArray = explode('/', $_POST['datepicker']);

    $sql = "INSERT INTO bookings (customer_name, dogs, booking_date, booking_hours) VALUES ('" . $_POST['name'] . "', '" . $dogs . "', '" . $dateArray[2] . "-" . $dateArray[0] . "-" . $dateArray[1] . "', " . intval($_POST["numHours"]) . ")";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
            
    mysqli_close($conn);
}
exit();
?>