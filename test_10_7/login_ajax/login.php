<?php
    header('content-type:text/html;charset=utf-8;');
    // 接收参数
    if(!isset($_POST['username'])||!isset($_POST['password'])){
        $arr=array("message"=>"请按照规则携带参数","code"=>0);
        echo json_encode($arr);
        exit;
    }
    $username=$_POST['username'];
    $password=$_POST['password'];

    // 数据库比对
    $link = mysqli_connect('localhost','root','root','gp20');
    $sql="SELECT * FROM `user` WHERE `username`='$username' AND `password`='$password'";
    $res=mysqli_query($link,$sql);
    $data=mysqli_fetch_all($res,MYSQLI_ASSOC);

    // 判断结果
    if(count($data)){
        $arr=array(
            "message"=>"登录成功",
            "code"=>1
        );
    }else{
        $arr=array(
            "message"=>"登录失败",
            "code"=>2
        );
    }
    echo json_encode($arr);
?>