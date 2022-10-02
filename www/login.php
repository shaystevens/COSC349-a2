<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <link rel="stylesheet" href="style.css"></link>
</head>

<body>
<h1><a href = "index.html">Doge Rentals oo</a></h1>
  <main id="loginMain">  
  <h3 id="login-header">Login</h3>
    <form action="http://127.0.0.1:8081/login-validation.php" id="login-form" method="POST">
      <p>
        <input id="usernameInput" type="text" name="username" placeholder="Username">
      </p>
      <p>
        <input id="passwordInput" type="password" name="password" placeholder="Password">
      </p>
      <input type="submit" name="login" value="Login" id="login-form-submit">
    </form>
  
  </main>
</body>

</html>