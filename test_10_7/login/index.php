<?php

    session_start();
    
    // print_r($username)
    if(isset($_SESSION['username'])){
        $username = $_SESSION['username'];
    }else{
        $username = '请登录';
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> <?php echo $username ?> </h1>
    <a href="./login.html"><button>去登陆</button></a>
</body>
</html>