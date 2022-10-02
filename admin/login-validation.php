<?php
session_start();
if(isset($_SESSION["admin"])){
    unset($_SESSION["admin"]);
}
?>
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<?php
/**
 * Check to see if a string contains any content or not.
 * Leading and trailing whitespace are not considered to be 'content'.
 *
 * @param string $str The string to check.
 * @return True if $str is empty, false otherwise.
 */
function isEmpty($str){
    return strlen(trim($str)) == 0;
}

/**
 * Check the username and password.
 * 
 * @param usernameInput The inputted username.
 * @param passwordInput The inputted password.
 * @param username The username from database.
 * @param password The password from the database.
 * @param messages The error messages array.
 */
function checkUsernameAndPassword($usernameInput, $passwordInput, $username, $password, &$messages){
    if(isEmpty($usernameInput)){
        array_push($messages, "Username can not be empty.");
    }

    if(isEmpty($passwordInput)){
        array_push($messages, "Password can not be empty.");
    }

    if($username != $usernameInput || $password != sha1($passwordInput)){
        array_push($messages, "Username or Password is incorrect.");
    }
}
?>

<html>
<link rel="stylesheet" href="style.css"></link>
</head>

<body>
<h1><a href = "http://127.0.0.1:8080/index.html">Doge Rentals oo</a></h1>
<main id="login-Validation-main">
<h3 id="error-header">Errors</h3>
<?php
if (isset($_POST['login'])){
    $db_host   = '192.168.56.12';
    $db_name   = 'fvision';
    $db_user   = 'webuser';
    $db_passwd = 'insecure_db_pw';

    $pdo_dsn = "mysql:host=$db_host;dbname=$db_name";
    
    $pdo = new PDO($pdo_dsn, $db_user, $db_passwd);
    $q = $pdo->query("SELECT * FROM admin");
    $row = $q->fetch();

    $error_messages = [];
    checkUsernameAndPassword($_POST['username'], $_POST['password'], $row["username"], $row["password"], $error_messages);

    if(sizeof($error_messages) != 0){
        foreach($error_messages as $message){
            echo "<p class='error_messages'>". $message ."</p>";
        }
    }else{
        $_SESSION["admin"] = "admin";
        header("Location: http://127.0.0.1:8081/admin.php");
        exit;
    }
}
?>
</main>
</body>
</html>