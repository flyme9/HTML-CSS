<?php
    header('content-type:text/html;charset=utf-8;');
    // 获取 提交过来的数据
    $username = $_GET['username'];
    $password = $_GET['password'];
    
    // 建立数据库连接
    $link = mysqli_connect('localhost','root','root','gp20');
    // 查询
    $sql = "SELECT * FROM `user` WHERE `username`='$username' AND `password`='$password'";
    // 
    $res = mysqli_query($link,$sql);
    // 转换为关联型数组
    $data=mysqli_fetch_all($res,MYSQLI_ASSOC);
    
    // 判断 输入的用户名和密码是否正确
    if(count($data)){
        header('location: ./home.html');
    }
    else{
        echo '用户名密码错误！';
        echo '<button><a href="./login.html">返回登录页</a></button>';
    }
?>