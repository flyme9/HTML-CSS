<?php
    header('content-type:text/html;charset=utf-8;');
    // 获取前端传过来的数据
    $username=$_POST['username'];
    $password=$_POST['password'];
    // 连接数据库
    $link = mysqli_connect('127.0.0.1','root','root','gp20');
    // 查询数据
    $sql="SELECT * FROM `user` WHERE `username`='$username' AND `password`='$password'";
    // 接收查询返回结果
    $res=mysqli_query($link,$sql);
    // 解析查询结果
    $data=mysqli_fetch_all($res,MYSQLI_ASSOC);
    // 判断登录结果
    if(count($data)){
        session_start();
        $_SESSION['login']=1;
        $_SESSION['username']=$data[0]['username'];
        header('location:./index.php');
    }else{
        echo '用户名密码错误';
    }
?>