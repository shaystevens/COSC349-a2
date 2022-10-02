<?php
header("Location: dogs.php");

if (isset($_POST['submit'])){
    $db_host   = '192.168.56.12';
    $db_name   = 'fvision';
    $db_user   = 'webuser';
    $db_passwd = 'insecure_db_pw';

    // Create connection
    $conn = mysqli_connect($db_host, $db_user, $db_passwd, $db_name);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
            
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